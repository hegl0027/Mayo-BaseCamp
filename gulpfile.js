var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');



/**
 * ASSETS
 */

gulp.task('fonts', [], function () {
    return gulp.src(['app/fonts/**/*', '!app/fonts/**/*.txt'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('images', [], function () {
    var pngquant = require('imagemin-pngquant');

    return gulp.src(['app/images/**/*'])
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            optimizationLevel: 3
        }))
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest('dist/images'));
});



/**
 * HTML
 */

gulp.task('html', [], function () {
    return gulp.src(['app/**/*.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('html-beautify', [], function () {
    var beautify = require('js-beautify').html;

    return gulp.src(['app/**/*.html'])
        .pipe(beautify())
        .pipe(gulp.dest('./app/'));
});



/**
 * JS
 */

gulp.task('js', [], function () {
    return gulp.src(['app/**/*.js', '!app/**/*_test.js'])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.angularFilesort())
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(plugins.uglify())
        .pipe(plugins.rename('app.min.js'))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('bower-js', [], function () {
    var gulpFilter = require('gulp-filter');
    var filterJS = gulpFilter('**/*.js', { restore: true });

    return gulp.src('bower.json')
        .pipe(plugins.mainBowerFiles())
        .pipe(filterJS)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(plugins.rename('vendor.min.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('js-fix', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.fixmyjs())
        .pipe(gulp.dest('app'));
});

gulp.task('js-jsbeautify', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.beautify({
            'space_after_anon_function': true
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('jscpd', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.plumber())
        .pipe(plugins.jscpd({
            'min-lines': 10,
            verbose: true,
            silent: false
        }))
        .pipe(plugins.plumber.stop());
});

gulp.task('jshint', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.jscs())
        .pipe(plugins.jscs.reporter());
});

gulp.task('js-complexity', [], function () {
    return gulp.src(['app/**/*.js'])
        .pipe(plugins.complexity({
            breakOnErrors: false
        }));
});



/**
 * STYLES
 */

gulp.task('styles', [], function () {
    return plugins.rubySass(['app/**/*.scss'])
        .pipe(plugins.sourcemaps.init())
        .on('error', plugins.rubySass.logError)
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('dist/css'))
        .pipe(plugins.rename('app.min.css'))
        .pipe(plugins.cssnano())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scsslint', [], function () {
    return gulp.src(['app/**/*.scss', '!app/**/*_reset.scss'])
        .pipe(plugins.scssLint({
            config: '.scsslint.yml'
        }));
});

gulp.task('bower-styles', [], function () {
    var gulpFilter = require('gulp-filter');
    var filterStyles = gulpFilter('**/*.css', { restore: true });

    return gulp.src('bower.json')
        .pipe(plugins.mainBowerFiles())
        .pipe(filterStyles)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('vendor.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(plugins.rename('vendor.min.css'))
        .pipe(plugins.csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});



/**
 * DOCS
 */

gulp.task('jsdoc', plugins.shell.task([
    'node_modules/jsdoc/jsdoc.js app -r -d docs/jsdoc'
]));


gulp.task('angular-jsdoc', plugins.shell.task([
    'node_modules/jsdoc/jsdoc.js app ' +
    '-c node_modules/angular-jsdoc/common/conf.json ' +
    '-t node_modules/angular-jsdoc/angular-template ' +
    '-d docs/angular ' +
    '-r --verbose'
]));

gulp.task('todo', [], function () {
    return gulp.src(['app/**/*.js', 'e2e-tests/**/*.js'])
        .pipe(plugins.todo())
        .pipe(gulp.dest('.'));
});


/**
 * LINES OF CODE
 */

gulp.task('js-sloc', function () {
    return gulp.src(['app/**/*.js', '!app/**/*_test.js'])
        .pipe(plugins.sloc());
});



/**
 * CLEANUP
 */

gulp.task('clean', function () {
    var del = require('del');

    return del('dist');
});



/**
 *  WATCHES
 */

gulp.task('watch', function () {
    var jsWatch = gulp.watch('app/**/*.js', ['app-js']);
    var htmlWatch = gulp.watch('app/**/*.html'['html']);
    var scssWatch = gulp.watch('app/**/*.scss', ['app-styles']);

    jsWatch.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running js tasks...');
    });

    htmlWatch.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running html tasks...');
    });

    scssWatch.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running sass tasks...');
    });
});



/**
 * TESTS
 */

gulp.task('protractor', [], function () {
    return gulp.src(['e2e-tests/**/*.js'])
        .pipe(plugins.angularProtractor({
            configFile: 'e2e-tests/protractor.conf.js',
            debug: true,
            autoStartStopServer: true,
            args: []
        }))
        .on('error', function (e) {
            console.error(e);
        });
});



/**
 * WRAPPERS
 */

gulp.task('assets', function (cb) {
    runSequence(['images', 'fonts'], cb);
});

gulp.task('quality', ['jscpd', 'js-sloc', 'js-complexity', 'jscs', 'scsslint', 'jshint']);
gulp.task('docs', ['todo', 'angular-jsdoc', 'jsdoc']);



/**
 *  BUILD IT ALL!!!
 */
gulp.task('build', [], function (cb) {
    runSequence('clean', ['assets', 'html', 'js', 'styles'], 'quality', cb);
});



/**
 *  default task executed when using cli 'gulp'
 */
gulp.task('default', ['build']);
