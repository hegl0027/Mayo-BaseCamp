exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '../**/*_specs.js'
    ],

    capabilities: {
        'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11'
    },

    seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer_x64_2.52.0.exe'],

    baseUrl: 'http://localhost:8000/dist/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: false,
        includeStackTrace: false
    }
};
