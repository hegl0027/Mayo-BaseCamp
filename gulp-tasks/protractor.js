
module.exports = function (gulp, plugins) {

    return function () {
        gulp.src(['e2e-tests/**/*.js'])
            .pipe(plugins.angularProtractor({
                configFile: 'e2e-tests/protractor.conf.js',
                debug: true,
                autoStartStopServer: true,
                args: []
            }))
            .on('error', function(e) {
                console.error(e);
            });
    }
}