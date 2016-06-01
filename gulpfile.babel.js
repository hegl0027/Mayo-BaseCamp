import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import eslint from 'gulp-eslint';
import pngquant from 'imagemin-pngquant';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babel from 'babelify';
import buffer from 'vinyl-buffer';
import loadPlugins from 'gulp-load-plugins';
var plugins = loadPlugins();

const config = {
    "app": {
        "root": "app",
        "html": "app/**/*.html",
        "scss": "app/**/*.scss",
        "angularTemplates": "app/views/**/*.html",
        "fonts": "app/fonts/**/!(*.txt)*",
        "images": "app/images/**/*",
        "js": "app/**/*.js",
        "unitTests": "app/**/*_tests.js",
        "templatesJs": "app/templates.js"
    },
    "dist": {
        "root": "dist",
        "html": [],
        "fonts": "dist/fonts",
        "images": "dist/images",
        "js": "dist/js",
        "css": "dist/css"
    },
    "rdm": {
        "e2eTests": "e2e-tests/**/*.js",
        "allDist": "dist/**/*",
        "jsWithoutTemplates": ["app/**/*.js", "!app/templates.js"],
        "scssWithoutReset": ["app/**/*.scss", "!app/**/*_reset.scss"]
    }
};

/**
 * Get the current [hrs:min:sec] timestamp used in the console
 *
 * @returns {string}
 */
function getTimestamp() {
    var date = new Date();
    return '[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ']  ';
}


/**
 * ASSETS
 */
gulp.task('fonts', () => {
    return gulp.src(config.app.fonts)
        .pipe(plugins.plumber())
        .pipe(gulp.dest(config.dist.fonts));
});

gulp.task('images', () => {
    return gulp.src(config.app.images)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dist.images));
});


/**
 * HTML
 */

gulp.task('html', () => {
    return gulp.src(config.app.html)
        .pipe(plugins.plumber())
        .pipe(plugins.angularHtmlify())
        .pipe(gulp.dest(config.dist.root));
});

gulp.task('template-cache', () => {
    return gulp.src(config.app.angularTemplates)
        .pipe(plugins.angularTemplatecache({
            standalone: true,
            moduleSystem: 'ES6'
        }))
        .pipe(gulp.dest(config.app.root));
});


/**
 * JS
 */

gulp.task('js', () => {
    return browserify({
            entries: "app/app.js",
            debug: true
        })
        .transform(babel)
        .bundle()
        .pipe(plugins.plumber())
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(gulp.dest(config.dist.js))
        .pipe(plugins.uglify())
        .pipe(plugins.rename('app.min.js'))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist.js));
});

gulp.task('size', () => {
    return gulp.src([config.rdm.allDist, '!dist/images/favicon/**/*'])
        .pipe(plugins.sizereport({
            gzip: true
        }));
});

gulp.task('eslint', () => {
    return gulp.src(config.rdm.jsWithoutTemplates)
        .pipe(plugins.plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('jscs', () => {
    return gulp.src(config.rdm.jsWithoutTemplates)
        .pipe(plugins.plumber())
        .pipe(plugins.jscs())
        .pipe(plugins.jscs.reporter());
});



/**
 * STYLES
 */

gulp.task('styles', () => {
    return plugins.rubySass(config.app.scss)
        .pipe(plugins.sourcemaps.init())
        .on('error', plugins.rubySass.logError)
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(config.dist.css))
        .pipe(plugins.rename('app.min.css'))
        .pipe(plugins.cssnano())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist.css));
});

gulp.task('scsslint', () => {
    return gulp.src(config.rdm.scssWithoutReset)
        .pipe(plugins.scssLint({
            config: '.scsslint.yml'
        }));
});


/**
 * DOCS
 *
 *
 */

gulp.task('jsdoc', plugins.shell.task([
    'jsdoc app -r -d docs/jsdoc -R README.md -c jsdoc.json'
]));

gulp.task('todo', () => {
    return gulp.src([config.app.js, config.rdm.e2eTests])
        .pipe(plugins.todo())
        .pipe(gulp.dest('.'));
});

gulp.task('plato', plugins.shell.task([
    'plato -l .jshintrc -t "Root Static Analysis" -r -d reports/plato app'
]));


/**
 * CLEANUP
 */

gulp.task('clean', () => {
    return del(config.dist.root);
});

gulp.task('clean-docs', () => {
    return del('docs');
});


/**
 *  WATCHES
 */
gulp.task('watch', () => {
    var jsWatch = gulp.watch(config.rdm.jsWithoutTemplates);
    var htmlWatch = gulp.watch(config.app.html);
    var scssWatch = gulp.watch(config.app.scss);

    jsWatch.on('change', function (event) {
        runSequence('eslint', 'jscs', 'js', 'docs', () => {
            console.log(getTimestamp() + ' ------  JS WATCH FINISHED ------');
        });

    });

    htmlWatch.on('change', event => {
        runSequence('html', 'template-cache', 'js', () => {
            console.log(getTimestamp() + ' ------  HTML WATCH FINISHED ------');
        });
    });

    scssWatch.on('change', event => {
        runSequence('scsslint', 'styles', () => {
            console.log(getTimestamp() + ' ------  STYLES WATCH FINISHED ------');
        });
    });
});


/**
 * WRAPPERS
 */
gulp.task('assets', cb => {
    runSequence(['images', 'fonts'], cb);
});

gulp.task('qa', ['jscs', 'scsslint', 'eslint']);

gulp.task('docs', cb => {
    runSequence('clean-docs', 'jsdoc', cb);
});

gulp.task('sample', () => {
   return gulp.src('app/api/sample.json')
       .pipe(gulp.dest('dist/sample'));
});


/**
 *  BUILD IT ALL!!!
 */
gulp.task('build', [], cb => {
    runSequence('clean', ['sample', 'assets', 'html', 'js', 'styles'], ['qa', 'docs', 'template-cache'], cb);
});


/**
 *  default task executed when using cli 'gulp'
 */
gulp.task('default', ['build']);


//todo: add ci and prod builds
