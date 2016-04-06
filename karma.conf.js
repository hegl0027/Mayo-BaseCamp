module.exports = function (config) {
    config.set({

        basePath: '',

        files: [
            'dist/js/vendor.js',
            'dist/js/app.js',
            'app/**/*_test.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        reporters: ['progress', 'junit'],

        junitReporter: {
            outputDir: 'dist/docs/karma',
            outputFile: 'test_out/unit.xml',
            suite: 'unit',
            useBrowserName: true
        }

    });
};
