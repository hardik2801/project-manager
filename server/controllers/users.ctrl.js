var mongoose = require('mongoose');
var ResponseUtils = appRequire('utils.response');

var passport = require('passport');
var config = appRequire('config');
require('../login.google.js')(passport);
var jwt = require('jsonwebtoken');
var User = appRequire("model.users");
var Projects = appRequire("model.projects");

function signup(req, res) {
    if (!req.body.email || !req.body.password) {
        return res.json(ResponseUtils.responseMessage(false, 'Please pass email and password.'));
    } else {
        var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            timezone: req.body.timezone
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                if (err.code == 11000) {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'email already exists'));
                } else {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
                }
            }
            return res.json(ResponseUtils.responseMessage(true, 'Successful created new user.'));
        });
    }
}

function login(req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        if (!user) {
            // setTimeout(() => {
            return res.json(ResponseUtils.responseMessage(false, 'User Not Found'));
            // }, 5000);
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (!err && isMatch) {
                    var token = jwt.sign(user.toJSON(), config.secret);
                    var data = {
                        token: token,
                        user: {
                            email: user.email,
                            name: user.name,
                            timezone: user.timezone,
                            reservations: user.reservations,
                            _id: user._id
                        }
                    };
                    return res.json(ResponseUtils.responseMessage(true, 'Logged In', data));
                } else {
                    return res.json(ResponseUtils.responseMessage(false, 'wrong Username or password'));
                }
            });
        }
    });
}

function getUser(req, res) {
    var userId = req.params.id;
    var populateQuery = [
		{
			path: 'projects',
			select: 'name  createdon'
		}];
    User.findById(userId).populate(populateQuery).select('name _id email').exec(function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', user));
    });
}

module.exports = {
    signup: signup,
    login: login,
    getUser: getUser
};