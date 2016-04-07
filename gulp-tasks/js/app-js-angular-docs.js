var exec = require('child_process').exec;

module.exports = function (gulp, plugins) {
    return function () {
        exec('node_modules/jsdoc/jsdoc.js app ' +
            '-c node_modules/angular-jsdoc/common/conf.json ' +
            '-t node_modules/angular-jsdoc/angular-template ' +
            '-d dist/docs/angular ' +
            '-r --verbose');
    };
};