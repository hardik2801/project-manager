var mongoose = require('mongoose');
var ResponseUtils = appRequire('utils.response');

var passport = require('passport');
require('../login.google.js')(passport);
var Users = appRequire("model.users");
var Projects = appRequire("model.projects");

function create(req, res, next) {
    var projectDoc = new Projects(req.body);

    projectDoc.save(function (err, doc) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var updateQuery = {
            $addToSet: {
                projects: doc._id
            }
        };
        Users.findByIdAndUpdate(req.body.user, updateQuery, { new: true }, function (err, user) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', doc));
        });
    });
}

function update(req, res, next) {
    var projectId = req.body.id;
    var projectName = req.body.name;

    Projects.findByIdAndUpdate(projectId, { $set: { name: projectName } }, { new: true }, function (err, doc) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', doc));
    });

}

function deleteProject(req, res) {
    var projectId = req.body.id;

    var updateQuery = {
        $pull: {
            projects: projectId
        }
    };
    Projects.remove({ _id: projectId }, function (err, doc) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        Users.findByIdAndUpdate(req.body.user, updateQuery, { new: true }, function (err, user) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', user));
        });
    });
}

function deleteTask(req, res) {
    var projectId = req.body.id;
    var taskName = req.body.taskName;

    // var updateQuery = {
    //     $pull: {
    //         'tasks.$.name': taskName
    //     }
    // };
    Projects.find({ _id: projectId }, function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var index = project[0].tasks.findIndex((task) => {
            return task.name == taskName;
        });
        if(index > -1) {
            project[0].tasks.splice(index, 1);
        }

        Projects.update({ _id: projectId }, {$set: {tasks: project[0].tasks }}, function (err, doc) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', project));
        });
    });
}

function getTasks(req, res) {
    var projectId = req.params.id;
    Projects.findById(projectId).select('name tasks').exec(function (err, tasks) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', tasks));
    });
}

function editTask(req, res) {
    var projectId = req.body.projectId;
    var taskOldName = req.body.oldName;

    Projects.findById(projectId).lean().exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        Projects.update({ 'tasks.name': taskOldName }, { $set: { 'tasks.$': req.body.task } }, function (err, result) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', result));
        });
    });
}

function addTask(req, res) {
    var projectId = req.body.projectId;

    var updateQuery = {
        $addToSet: {
            tasks: req.body.task
        }
    };

    Projects.findByIdAndUpdate(projectId, updateQuery, { new: true }, function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', project));
    });

}

module.exports = {
    create: create,
    update: update,
    deleteProject: deleteProject,
    getTasks: getTasks,
    editTask: editTask,
    addTask: addTask,
    deleteTask: deleteTask
};