'use strict';

var config = appRequire('config');

/**
 * Meant to log exceptions which are handled
 */
function responseError(err){
	// TODO: Deal with errors
	console.log(err);
	return {
		status : false,
		message : 'error',
		data : err
	};
}


function responseMessage(status, message,data){
	return {
		status : status,
		message : message,
		data : data
	};
}

function responseSuccess(data){
    return {
        status : true,
        message : 'success',
        data : data
    };
}

function validateRequestObject(object, parameters) {
	for(var index = 0; index < parameters.length; index++) {
		if(!object.hasOwnProperty(parameters[index])) {
			console.log(parameters[index]);
			return false;
		}
	}
	return true;
}

module.exports = {
	responseMessage : responseMessage,
	responseError	: responseError,
	responseSuccess : responseSuccess, 
	validateRequestObject : validateRequestObject
};