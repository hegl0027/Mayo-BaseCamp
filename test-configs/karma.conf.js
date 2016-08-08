module.exports = function (config) {
    config.set({

        autoWatch: true,

        basePath: './',

        files: [
            '../app/**/*.spec.js',
            {
                pattern: '../app/**/*!(.spec).js',
                included: false
            }
        ],

        preprocessors: {
            '../app/**/*.js': ['eslint', 'browserify', 'coverage']
        },

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        frameworks: ['jasmine', 'detectBrowsers', 'browserify'],

        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: true,

            // here you can edit the list of browsers used by karma
            postDetection: function (availableBrowsersArray) {
                //return availableBrowsersArray;
                return ['Chrome']
            }
        },

        browserify: {
            debug: true,
            transform: [
                require('browserify-istanbul')({
                    instrumenter: require('isparta'),
                    ignore: ['**/*.spec.js']
                }),
                'babelify']
        },

        reporters: ['progress', 'junit', 'coverage'],

        coverageReporter: {
            reporters: [
                { type: 'html' },
                { type: 'text-summary' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt'}
            ],
            dir: '../reports/coverage/',
            sourceStore: require("isparta").Store.create("fslookup")
        },

        junitReporter: {
            outputDir: '../reports/karma',
            outputFile: 'unit.xml',
            suite: 'unit',
            useBrowserName: true
        },

        eslint: {
            stopOnError: false
        }
    });
};
