var pngquant = require('imagemin-pngquant');

module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/images/**/*'])
            .pipe(plugins.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(gulp.dest('dist/images'));
    }
}