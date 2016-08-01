var exec = require('child_process').exec;
var base = require('./protractor.base.config');
var serve;

base.config.capabilities = {
    'browserName': 'chrome'
}

// A callback function called once configs are read but before any environment
// setup. This will only run once, and before onPrepare.
// You can specify a file containing code to run by setting beforeLaunch to
// the filename string.
base.config.beforeLaunch = function () {
    serve = exec('npm start');
},

    // A callback function called once tests are finished.
    // onComplete can optionally return a promise, which Protractor will wait for
    // before shutting down webdriver.
    base.config.onComplete = function () {
        // At this point, tests will be done but global objects will still be
        // available.
        if (serve) {
            serve.kill();
        }
    },


    exports.config = base.config;