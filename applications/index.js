var require_directory = require('require-directory');
var applications = require_directory(module);
var keys = Object.keys(applications);

module.exports = function() {

    var models = {};
    var controllers = {};

    keys.forEach(function(key) {
        controllers[key] = applications[key].controller;
        models[key] = applications[key].model;
    });

    return {
        models: models,
        controllers: controllers
    }

}();
