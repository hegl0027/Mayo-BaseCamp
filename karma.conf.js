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

        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        // browsers: ['Chrome', 'Firefox', 'IE', 'Safari', 'PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-safari-launcher',
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
