module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/**/*.html'])
            .pipe(gulp.dest('dist'));
    }
}