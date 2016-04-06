module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch('app/**/*.js', ['js']);
        gulp.watch('app/**/*.html' ['html']);
        gulp.watch('app/**/*.scss', ['styles']);
        gulp.watch('app/images/**/*', ['images']);
    }
}