module.exports = function (gulp, plugins) {

    return function() {
        plugins.rubySass(['app/**/*.scss'])
            .pipe(plugins.sourcemaps.init())
            .on('error', plugins.rubySass.logError)
            .pipe(plugins.concat('app.css'))
            .pipe(plugins.autoprefixer())
            .pipe(gulp.dest('./dist/css'))
            .pipe(plugins.rename('app.min.css'))
            .pipe(plugins.cssnano())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest('./dist/css'));
    }
}