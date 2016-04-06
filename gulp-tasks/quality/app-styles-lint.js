module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.scss', '!app/**/*_reset.scss'])
            .pipe(plugins.scssLint({
                config: '.scsslint.yml'
            }));
    }
}