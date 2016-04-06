var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();


/* helper to require tasks from ./gulp-tasks/** */
function getTask(task, subdir) {
    if (!subdir) {
        return require('./gulp-tasks/' + task)(gulp, plugins);
    } else {
        return require('./gulp-tasks/' + subdir + '/' + task)(gulp, plugins);
    }
}


/* main build tasks */
gulp.task('images', [], getTask('app-images', 'assets'));
gulp.task('fonts', getTask('app-fonts', 'assets'));


gulp.task('html', [], getTask('app-html', 'html'));
//gulp.task('inject', ['html'], getTask('inject', 'html'));
gulp.task('app-js', ['js-quality'], getTask('app-js', 'js'));
gulp.task('js-fix', ['fixmyjs', 'jsbeautify']);
gulp.task('js-quality', ['jscpd', 'jshint', 'jscs', 'complexity']);
gulp.task('app-styles', ['scsslint'], getTask('app-styles', 'styles'));
gulp.task('bower-js', getTask('bower-js', 'js'));
gulp.task('bower-styles', getTask('bower-styles', 'styles'));


/* wrappers */
gulp.task('assets', ['images', 'fonts']);
gulp.task('js', ['app-js', 'js-quality', 'bower-js']);
gulp.task('styles', ['app-styles', 'bower-styles']);
gulp.task('docs', ['jsdoc', 'angular-jsdoc', 'todo']);


/* static analysis */
gulp.task('jscpd', getTask('app-js-jscpd', 'quality')); // look for copy/paste design pattern
gulp.task('jshint', getTask('app-js-jshint', 'quality')); // js syntax
gulp.task('jscs', getTask('app-js-jscs', 'quality')); // js code style
gulp.task('fixmyjs', getTask('app-js-fixmyjs', 'quality')); // fix my jshint errors
gulp.task('complexity', getTask('app-js-complexity', 'quality')); // check out js code complexity
gulp.task('scsslint', getTask('app-styles-lint', 'quality')); // lint scss


/* beautify */
gulp.task('jsbeautify', getTask('app-js-beautify', 'js'));
gulp.task('htmlbeautify', getTask('app-html-beautify', 'html'));


/* code todos */
gulp.task('todo', getTask('app-js-todo', 'js'));


/* js doc */
gulp.task('jsdoc', getTask('app-js-docs', 'js'));
gulp.task('angular-jsdoc', getTask('app-js-angular-docs', 'js'));


/* cleanup */
gulp.task('clean', getTask('clean'));


/* build it all!!! */
gulp.task('build', ['html', 'js', 'styles', 'assets', 'docs']);


/* default task executed when using cli 'gulp' */
gulp.task('default', ['build']);


/* fire up the watch */
gulp.task('watch', getTask('watch'));


/* lets test some stuff */
gulp.task('protractor', getTask('protractor'));
