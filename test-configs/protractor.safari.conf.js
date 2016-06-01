exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../**/*_specs.js'
    ],

    capabilities: {
        'browserName': 'safari'
    },

    baseUrl: 'http://localhost:3000/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    }
};
