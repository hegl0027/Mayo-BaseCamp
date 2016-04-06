var exec = require('child_process').exec;

module.exports = function (gulp, plugins) {
    return function () {
        exec('node_modules/jsdoc/jsdoc.js app -r -d dist/docs/jsdoc');
    }
}