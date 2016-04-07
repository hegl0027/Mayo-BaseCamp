module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/fonts/**/*', '!app/fonts/**/*.txt'])
            .pipe(gulp.dest('dist/fonts'));
    };
};