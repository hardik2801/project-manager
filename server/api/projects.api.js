var express = require('express');
var Controller = appRequire('ctrl.projects');
var express = require('express');
var Router = express.Router();

Router.post('/create', Controller.create);
Router.post('/update', Controller.update);
Router.post('/delete', Controller.deleteProject);
Router.get('/tasks/:id', Controller.getTasks);
Router.post('/edittask', Controller.editTask);
Router.post('/addtask', Controller.addTask);
Router.post('/deletetask', Controller.deleteTask);
Router.post('/editcomment', Controller.editComment);
Router.post('/addcomment', Controller.addComment);
Router.post('/deleteComment', Controller.deleteComment);

module.exports = Router;