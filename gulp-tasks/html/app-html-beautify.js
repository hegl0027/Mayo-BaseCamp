var beautify = require('js-beautify').html;

module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/**/*.html'])
            .pipe(beautify())
            .pipe(gulp.dest('./app/'));
    }

}