var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'reports/protractor',
    filename: 'e2e-tests.html'
});

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../e2e-tests/**/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    },

    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {
        require("babel-core/register")({presets: ["es2015"]})
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};