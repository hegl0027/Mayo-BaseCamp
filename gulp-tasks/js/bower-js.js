var gulpFilter = require('gulp-filter');
var filterJS = gulpFilter('**/*.js', { restore: true });

module.exports = function (gulp, plugins) {

    return function () {
        gulp.src('bower.json')
            .pipe(plugins.mainBowerFiles())
            .pipe(filterJS)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('vendor.js'))
            .pipe(gulp.dest('dist/js'))
            .pipe(plugins.rename('vendor.min.js'))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest('dist/js'));
    }
}