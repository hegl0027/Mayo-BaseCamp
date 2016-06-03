module.exports = function (config) {
    config.set({

        basePath: '',

        preprocessors: {
            '../app/**/!(*.tests).js': ['coverage', 'browserify'],
            '../app/**/*.tests.js': ['browserify']
        },


        files: [
            '../app/**/architecture.tests.js'
        ],

        logLevel: 'INFO',

        autoWatch: true,

        frameworks: ['jasmine', 'detectBrowsers', 'browserify'],

        // configuration
        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: true,

            // here you can edit the list of browsers used by karma
            postDetection: function (availableBrowser) {
                return ['Firefox'];
            }
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-safari-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-spec-reporter',
            'karma-detect-browsers',
            'karma-coverage',
            'karma-babel-preprocessor',
            'karma-browserify'
        ],

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        reporters: ['spec', 'junit', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: '../reports/coverage/'
        },

        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: true,
            suppressSkipped: true,
            showSpecTiming: false
        },

        junitReporter: {
            outputDir: '../reports/karma',
            outputFile: 'unit.xml',
            suite: 'unit',
            useBrowserName: true
        }
    });
};
