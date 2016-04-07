module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js'])
            .pipe(plugins.plumber())
            .pipe(plugins.jscpd({
                'min-lines': 10,
                verbose: false,
                silent: false,
                output: 'dist/docs/copy-paste-design-pattern'
            }))
            .pipe(plugins.plumber.stop());

    };
};