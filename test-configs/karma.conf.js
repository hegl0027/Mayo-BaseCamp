module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            '../dist/js/vendor.min.js',
            '../dist/js/app.min.js',
            '../app/**/*_tests.js'
        ],

        logLevel: 'DEBUG',

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        //browsers: ['Chrome', 'Firefox', 'IE', 'Safari', 'PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-safari-launcher',
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
