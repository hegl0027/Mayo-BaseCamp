module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            '../dist/js/vendor.min.js',
            '../dist/js/app.min.js',
            '../app/**/*_tests.js'
        ],

        logLevel: 'INFO',

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Firefox'],
        //browsers: ['Chrome', 'Firefox', 'IE', 'Safari', 'PhantomJS'],

        plugins: [
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-spec-reporter'
        ],

        reporters: ['specs', 'junit'],

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true,
            showSpecTiming: false
        },

        junitReporter: {
            outputDir: 'reports/karma',
            outputFile: 'unit.xml',
            suite: 'unit',
            useBrowserName: true
        }
    });
};
