var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Names = require('./collection.names');
var mongooseUtils = require('./mongoose.utils');

/* 
I Have Used an embedded model here for tasks and comments since normalized model takes multiple queries to execute for single 
read/write operation and embedded model doesnt need multiple queries back and forth to database for the same operation

We would be using a normalized model in case where having an embedded model would be causing data redunduncy, 
but in this case each task/comment will belong to only one project, so here embedded model design outweighs the
advantages of normalized model.

*/

var comments = new Schema({
    message: String,
    file_path: String,
    server_file_name: String,
    client_file_name: String
}, mongooseUtils.defaultSchemaOption);


var tasks = new Schema({
    name: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        default: null
    },
    priority: {
        type: String,
        enum: ['high', 'medium', 'low']
    },
    status: {
        type: String,
        enum: ['pending', 'in process', 'done']
    },
    comments: [comments]
}, mongooseUtils.defaultSchemaOption);

var Projects = new Schema({
    name: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: Names.users,
        required: true
    },
    createdon: {
        type: Date,
        default: new Date()
    },
    modifiedon: {
        type: Date,
        default: new Date()
    },
    tasks: [tasks],
}, { usePushEach: true }, mongooseUtils.defaultSchemaOption);


module.exports = mongoose.model(Names.projects, Projects);