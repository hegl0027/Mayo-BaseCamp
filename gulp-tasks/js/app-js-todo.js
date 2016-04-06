module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js', 'e2e-tests/**/*.js'])
            .pipe(plugins.todo())
            .pipe(gulp.dest('.'))
            .pipe(plugins.todo.reporter('json', {fileName: 'TODO.json'}))
            .pipe(gulp.dest('.'));
    };
};