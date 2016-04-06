var plato = require('plato');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/**/*.js'])
            .pipe(plato.inspect(['app/**/*.js']))
            .pipe(gulp.dest('.'));
    }
}