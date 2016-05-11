module.exports = function (config) {
    config.set({

        basePath: '',

        preprocessors: {
            '../dist/**/*.js': 'coverage'
        },


        files: [
            '../dist/js/vendor.min.js',
            '../dist/js/app.min.js',
            '../app/**/*_tests.js'
        ],

        logLevel: 'INFO',

        autoWatch: true,

        frameworks: ['jasmine', 'detectBrowsers'],

        //browsers: ['Chrome', 'Firefox', 'IE', 'Safari', 'PhantomJS'],

        // configuration
        detectBrowsers: {
            // enable/disable, default is true
            enabled: true,

            // enable/disable phantomjs support, default is true
            usePhantomJS: true,

            // post processing of browsers list
            // here you can edit the list of browsers used by karma
            postDetection: function (availableBrowser) {
                /* Karma configuration with custom launchers
                 customLaunchers: {
                 IE9: {
                 base: 'IE',
                 'x-ua-compatible': 'IE=EmulateIE9'
                 }
                 }
                 */

                //Add IE Emulation
                var result = availableBrowser;

                if (availableBrowser.indexOf('IE') > -1) {
                    result.push('IE9');
                }

                //Remove PhantomJS if another browser has been detected
                if (availableBrowser.length > 1 && availableBrowser.indexOf('PhantomJS') > -1) {
                    var i = result.indexOf('PhantomJS');

                    if (i !== -1) {
                        result.splice(i, 1);
                    }
                }

                return result;
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
            'karma-coverage'
        ],

        reporters: ['specs', 'junit', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: '../reports/coverage/'
        },

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
