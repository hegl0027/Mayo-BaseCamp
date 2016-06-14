exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../e2e-tests/**/*.spec.js'
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
    },

    onPrepare: function () {
        require("babel-core/register")({presets: ["es2015"]})
    }
};
