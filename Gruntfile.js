"use strict";

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	var gitCmds = [
		'git add .',
		'git commit -m ',
        'git pull',
		'git push'
	];

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt, {
		express : 'grunt-express-server',
		watch : 'grunt-contrib-watch',		
		sass : 'grunt-contrib-sass',
		copy : 'grunt-contrib-copy',
        connect : 'grunt-contrib-connect',
        nodemon : 'grunt-nodemon'
	});

	grunt.initConfig({
		concurrent : {
			app : {
				tasks : ['sass','watch','nodemon', 'connect'],
				options : {
					logConcurrentOutput : true
				}
			},
			browser : {
				tasks : ['connect'],
				options : {
					logConcurrentOutput : true
				}
			}
		},
        nodemon : {
			dev : {
				script : 'server/app.js',
				options : {
					watch: ['server'],
					env: {
						PORT: '3000'
					},
					ext: 'js',
					legacyWatch: true,
					cwd: __dirname,
					callback : function(nodemon) {
						nodemon.on('log',function(event){
							console.log(event.colour);
						});
					}
				}
			}
		},		
		connect : {
			server : {
				options : {
					open: {
						target: 'http://127.0.0.1:3000/login/'
					}
				}
			}
		},		
		watch : {
			gruntFile : {
				files : ['Gruntfile.js']
			},
			livereload : {
				files : ['client/*','client/**/*'],
				options : {
					livereload : true
				}
			},
			sass : {
				files : ['client/scss/**/*.scss'],
				tasks : ['sass']
			}
		},
		shell : {
			git : {
				command : []
			}
		},		
		sass : {
			dist : {
				files : [{
					expand : true,
					cwd : 'client/scss',
					src : ['**/*.scss'],
					dest : 'client/commons/css',
					ext : '.css'
				}]
			}
		},
		copy : {
			html : {
				expand : true,
				cwd : 'client/dashboard',
				src : ['**/*.html', '**/*.css'],
				dest : 'client/build'
			}
		},
		requirejs : {
			compile : {
				options : {
					baseUrl: "client/dashboard",
					mainConfigFile : 'client/dashboard/influencer.require.config.js',
					name: "bower_components/almond/almond",
					out: "client/build/influencer.require.config.js",
					uglify : {
						mangle   : false
					}
				}
			}
		}
	});

	grunt.registerTask('cli',function(){
		grunt.log.writeln(grunt.option('m'));
	});

	grunt.registerTask('git',function(){
		var message = grunt.option('m');
		if(message){
			gitCmds[1] = gitCmds[1]+ '"' + message + ' - Commited on ' + grunt.template.today('dddd, mmmm dS, yyyy, h:MM:ss TT') +'"';
			grunt.config('shell.git.command',gitCmds.join(' && '));
			console.log(grunt.config.get('shell.git.command'));
			grunt.task.run('shell:git');
		} else {
			grunt.log.writeln('No message provided....');
		}
	});

	grunt.registerTask('wait', function() {

		grunt.log.writeln('A basic timeout wait..... PROCESSING');

		var done = this.async();

		setTimeout(function(){
			grunt.log.writeln('Processing Completed');
			done();
		}, 1500);

	});
    
	//grunt.registerTask('default',[]);
	grunt.registerTask('serve',['concurrent:app','wait','concurrent:browser']);
	grunt.registerTask('test',['simplemocha']);
	grunt.registerTask('build', ['requirejs', 'sass', 'copy']);

};