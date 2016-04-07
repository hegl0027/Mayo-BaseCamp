var browserify = require('browserify');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js', '!app/**/*_test.js'])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.angularFilesort())
            .pipe(plugins.ngAnnotate())
            .pipe(plugins.concat('app.js'))
            .pipe(gulp.dest('dist/js'))
            .pipe(plugins.uglify())
            .pipe(plugins.rename('app.min.js'))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'));
    };
};