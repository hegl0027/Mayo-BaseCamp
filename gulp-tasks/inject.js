module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('dist/index.html')
            .pipe(plugins.inject(
                gulp.src(['dist/js/**/*.min.js', 'dist/css/**/*.min.css'], {read: false})
                    .pipe(plugins.angularFilesort())
            ), {relative: true})
            .pipe(gulp.dest('dist'));

    }
}