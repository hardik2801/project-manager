var requireConfig = require('./require-config');

global.appRequire = function(alias){
    return require(__dirname + '/' + requireConfig[alias.toLowerCase()]);
};

var http = require('http');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

var compression = require('compression');

var config = appRequire('config');
var routes = appRequire('routes');

var app = express();

    mongoose.connect(config.mongoose.uri, function(err) { 
	if(err) {
		console.log(err);
	}
});


app.use(compression());

app.use(bodyParser.json({ limit : '50mb' }));

routes(app);


var server = http.createServer(app);
server.listen(config.port, config.host, function(){
    console.log("Server started on " + config.host + " on port " + config.port);
});

// when the server is shutting down, it emits a SIGTERM event. this lets us clean up connections etc.
process.on('SIGTERM', function(){
    console.log('Server shutting down!!');
    mongoose.connection.close();
    process.exit(0);
});



