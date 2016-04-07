var gulpFilter = require('gulp-filter');
var filterStyles = gulpFilter('**/*.css', { restore: true });

module.exports = function (gulp, plugins) {

    return function () {
        gulp.src('bower.json')
            .pipe(plugins.mainBowerFiles())
            .pipe(filterStyles)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat('vendor.css'))
            .pipe(gulp.dest('dist/css'))
            .pipe(plugins.rename('vendor.min.css'))
            .pipe(plugins.csso({
                restructure: false,
                sourceMap: true,
                debug: true
            }))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'));
    };
};