module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js'])
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('jshint-stylish'));
    }
}