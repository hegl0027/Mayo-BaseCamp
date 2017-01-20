// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
//
// var reporter = new HtmlScreenshotReporter({
//     dest: './reports/protractor',
//     filename: 'e2e-tests.html',
//     captureOnlyFailedSpecs: true
// });


exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../e2e-tests/**/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine',

    // Options to be passed to jasmine.
    //
    // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
    // for the exact options available.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    },

    // A callback function called once configs are read but before any environment
    // setup. This will only run once, and before onPrepare.
    // You can specify a file containing code to run by setting beforeLaunch to
    // the filename string.
    beforeLaunch: function () {
        // return new Promise(function (resolve) {
        //     reporter.beforeLaunch(resolve);
        // });
    },

    // Assign the test reporter to each running instance
    onPrepare: function () {
        require("babel-core/register")({presets: ["es2015"]});
        //jasmine.getEnv().addReporter(reporter);

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'reports/protractor',
            filePrefix: 'unit'
        }));
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        // return new Promise(function (resolve) {
        //     reporter.afterLaunch(resolve.bind(this, exitCode));
        // });
    },

    // A callback function called once tests are finished.
    // onComplete can optionally return a promise, which Protractor will wait for
    // before shutting down webdriver.
    onComplete: function () {
        // At this point, tests will be done but global objects will still be
        // available.

    },
};