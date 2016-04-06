module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/**/*.js'])
            .pipe(plugins.beautify({
                'space_after_anon_function': true
            }))
            .pipe(gulp.dest('app/'));
    }

}