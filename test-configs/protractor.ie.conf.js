exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../**/*_specs.js'
    ],

    multiCapabilities: [{
        'browserName': 'ie'
    }],

    /*multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }, {
        'browserName': 'ie'
    }, {
        'browserName': 'safari'
    }],*/

    baseUrl: 'http://localhost:8000/dist/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    }
};
