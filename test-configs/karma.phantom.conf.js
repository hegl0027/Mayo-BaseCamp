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

        browsers: ['PhantomJS'],
        //browsers: ['Chrome', 'Firefox', 'IE', 'Safari', 'PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
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
