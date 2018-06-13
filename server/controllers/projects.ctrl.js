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
    var taskId = req.body.taskId;

    Projects.findById(projectId, function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var index = project.tasks.findIndex((task) => {
            return task._id == taskId;
        });
        if (index > -1) {
            project.tasks[index].remove();
        }

        project.save(function (err, doc) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', doc));
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
    var newTask = req.body.task;

    Projects.findById(projectId).exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        var index = project.tasks.findIndex((task) => { return task._id == newTask._id; });
        project.tasks[index] = newTask;
        project.save(function (err, task) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', task));
        });
    });
}

function addTask(req, res) {
    var projectId = req.body.projectId;

    Projects.findById(projectId).exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        project.tasks.push(req.body.task);

        project.save(function (err, project) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', project));
        });
    });
}


function deleteComment(req, res) {
    var projectId = req.body.projectId;
    var taskId = req.body.taskId;
    var commentId = req.body.commentId;

    Projects.findById(projectId).exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var taskIndex = project.tasks.findIndex((task) => { return task._id == taskId; });
        var commentIndex = project.tasks[taskIndex].comments.findIndex((comment) => { return comment._id == commentId; });
        project.tasks[taskIndex].comments[commentIndex].remove();

        project.markModified('tasks');

        project.save(function (err, project) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', project));
        });
    });
}

function addComment(req, res) {
    var projectId = req.body.projectId;
    var taskId = req.body.taskId;
    var newComment = req.body.commentMessage;

    Projects.findById(projectId).exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var taskIndex = project.tasks.findIndex((task) => { return task._id == taskId; });
        project.tasks[taskIndex].comments.push({ message: newComment });

        project.markModified('tasks');

        project.save(function (err, project) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', project));
        });
    });
}

function editComment(req, res) {
    var projectId = req.body.projectId;
    var taskId = req.body.taskId;
    var commentId = req.body.commentId;
    var newComment = req.body.commentMessage;

    Projects.findById(projectId).exec(function (err, project) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        var taskIndex = project.tasks.findIndex((task) => { return task._id == taskId; });
        var commentIndex = project.tasks[taskIndex].comments.findIndex((comment) => { return comment._id == commentId; });
        project.tasks[taskIndex].comments[commentIndex].message = newComment;

        project.markModified('tasks');
        project.markModified('tasks.comments');

        project.save(function (err, project) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            return res.json(ResponseUtils.responseMessage(true, 'success', project));
        });
    });
}

module.exports = {
    create: create,
    update: update,
    deleteProject: deleteProject,
    getTasks: getTasks,
    editTask: editTask,
    addTask: addTask,
    deleteTask: deleteTask,
    editComment: editComment,
    addComment: addComment,
    deleteComment: deleteComment
};