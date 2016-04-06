module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch('app/**/*.js', ['app-js']);
        gulp.watch('app/**/*.html' ['html']);
        gulp.watch('app/**/*.scss', ['app-styles']);
        gulp.watch('app/images/**/*', ['images']);
    }
}