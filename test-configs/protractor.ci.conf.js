var exec = require('child_process').exec;
var base = require('./protractor.base.config');

base.config.capabilities = {
    'browserName': 'chrome'
}

// A callback function called once configs are read but before any environment
// setup. This will only run once, and before onPrepare.
// You can specify a file containing code to run by setting beforeLaunch to
// the filename string.
base.config.beforeLaunch = function() {
    exec('npm start');
},

exports.config = base.config;