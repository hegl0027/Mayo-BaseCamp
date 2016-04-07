module.exports = function (gulp, plugins) {
    return function () {
        var jsWatch = gulp.watch('app/**/*.js', ['app-js']);
        var htmlWatch = gulp.watch('app/**/*.html' ['html']);
        var scssWatch = gulp.watch('app/**/*.scss', ['app-styles']);

        jsWatch.on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running js tasks...');
        });

        htmlWatch.on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running html tasks...');
        });

        scssWatch.on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running sass tasks...');
        });
    };
};