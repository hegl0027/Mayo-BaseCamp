module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js'])
            .pipe(plugins.complexity({
                breakOnErrors: false
            }));
    };
};