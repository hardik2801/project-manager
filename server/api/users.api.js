var express = require('express');
var Controller = appRequire('ctrl.users');
var express = require('express');
var Router = express.Router();

Router.post('/signup', Controller.signup);
Router.post('/login', Controller.login);
Router.get('/user/:id', Controller.getUser);

module.exports = Router;