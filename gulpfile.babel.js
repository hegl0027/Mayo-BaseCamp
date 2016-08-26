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
import watchify from 'watchify';
import files from './files';
import packagejson from './package.json';
import stream from 'stream';
import moment from 'moment';
import ConsoleTimer from './util/console-timer';
const plugins = loadPlugins();


/**
 * Get the current [hrs:min:sec] timestamp used in the console
 *
 * @returns {string}
 */
function getTimestamp() {
  return moment().format('hh:mm:ss');
}


/**
 * Return the string representation of the file contents.  Used by gulp-inject#options.transform
 *
 * @param filePath
 * @param file
 */
function fileContents(filePath, file) {
  return file.contents.toString();
}

/**
 * Create a fake vinyl from a string
 *
 * @param filename the filename to create
 * @param string the contents of the file
 * @returns {"stream".Readable|*}
 */
function stringSrc(filename, string) {
  var src = stream.Readable({objectMode: true});
  src._read = function () {
    this.push(new plugins.util.File({
      cwd: "",
      base: "",
      path: filename,
      contents: new Buffer(string)
    }));
    this.push(null)
  };
  return src;
}

/**
 * Browserify config/compile function
 *
 * @param watch boolean to drive the use of watchify for js src files
 * @returns {*}
 */
function compile(watch) {
  const bundler = browserify(files.src.entry, {debug: false}).transform(babel);

  function rebundle() {
    return bundler.bundle()
      .on('error', plugins.util.log)
      .pipe(source('app.bundle.js'))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(gulp.dest(files.dest.js))
      .pipe(plugins.uglify({mangle: false}))
      .pipe(plugins.rename({extname: '.min.js'}))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(files.dest.js));
  }

  if (watch) {
    watchify(bundler.on('update', () => {
      let timer = new ConsoleTimer('bundle').start();
      rebundle().on('end', () => {
        timer.end();
      });

    }));
  }

  return rebundle();
}


/**
 * ASSETS
 */
gulp.task('fonts', () => {
  return gulp.src(files.src.fonts)
    .pipe(gulp.dest(files.dest.fonts));
});

gulp.task('images', () => {
  return gulp.src(files.src.images)
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(files.dest.images));
});

gulp.task('svg-bundle', () => {
  return gulp.src(files.src.svg)
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(plugins.svgstore())
    .pipe(gulp.dest(files.dest.images));
});

gulp.task('inline-svg', () => {

  const svgs = gulp
    .src(files.src.inlineSvg)
    .pipe(plugins.rename({
      prefix: 'icon-'
    }))
    .pipe(plugins.svgstore({inlineSvg: true}));

  return gulp
    .src(`${files.dest.dir}/index.html`)
    .pipe(plugins.inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest(files.dest.dir));
});


/**
 * HTML
 */

gulp.task('html', () => {
  return gulp.src(`${files.src.dir}/index.html`)
    .pipe(plugins.plumber())
    .pipe(plugins.angularHtmlify())
    .pipe(gulp.dest(files.dest.dir));
});

gulp.task('template-cache', () => {
  return gulp.src(files.src.partials)
    .pipe(plugins.angularHtmlify())
    .pipe(plugins.angularTemplatecache({
      standalone: true,
      moduleSystem: 'Browserify'
    }))
    .pipe(gulp.dest(files.dest.components));
});

gulp.task('inject-version', () => {
  const version = packagejson.version;
  const src = source(packagejson.version);

  return gulp.src(`${files.src.dir}/components/nav/nav.html`)
    .pipe(plugins.plumber())
    .pipe(plugins.inject(stringSrc('version', version), {
      starttag: '<!-- inject:version -->',
      transform: fileContents
    }))
    .pipe(gulp.dest(`${files.src.dir}/components/nav/`));
});


/**
 * JS
 */

gulp.task('js', () => {
  return compile();
});

gulp.task('size', () => {
  return gulp.src(files.src.size)
    .pipe(plugins.sizereport({
      gzip: true
    }));
});

gulp.task('eslint', () => {
  return gulp.src(files.src.js)
    .pipe(plugins.plumber())
    .pipe(eslint())
    .pipe(eslint.format());
});


/**
 * STYLES
 */

gulp.task('styles', () => {
  return plugins.rubySass(files.src.sass)
    .pipe(plugins.sourcemaps.init())
    .on('error', plugins.rubySass.logError)
    .pipe(plugins.concat('app.css'))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(files.dest.css))
    .pipe(plugins.rename('app.min.css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(files.dest.css));
});

gulp.task('sass-lint', () => {
  return gulp.src(files.src.sassIgnoreReset)
    .pipe(plugins.scssLint({
      config: files.configs.scssLint
    }));
});


/**
 * DOCS
 */

gulp.task('jsdoc', plugins.shell.task([
  'jsdoc -c jsdoc.json'
]));

gulp.task('todo', () => {
  return gulp.src(files.src.todo)
    .pipe(plugins.todo())
    .pipe(gulp.dest('./'));
});

gulp.task('metrics', (cb) => {
  plato(cb);
});


/**
 * CLEANUP
 */

gulp.task('clean', () => {
  return del(files.dest.dir);
});

gulp.task('clean-docs', () => {
  return del(files.dest.docs);
});


/**
 *  WATCHES
 */
gulp.task('watch', () => {
  var jsWatch = gulp.watch(files.src.appJs);
  var htmlWatch = gulp.watch(files.src.html);
  var scssWatch = gulp.watch(files.src.sass);

  compile(true);

  jsWatch.on('change', function (event) {
    runSequence('docs', () => {
    });
  });

  htmlWatch.on('change', event => {
    runSequence('html', 'template-cache', 'inline-svg', () => {
    });
  });

  scssWatch.on('change', event => {
    runSequence('sass-lint', 'styles', () => {
    });
  });
});


/**
 * WRAPPERS
 */
gulp.task('assets', cb => {
  runSequence('svg-bundle', ['images', 'fonts'], 'inline-svg', cb);
});

gulp.task('qa', ['sass-lint', 'eslint']);

gulp.task('docs', cb => {
  runSequence('clean-docs', 'jsdoc', cb);
});

gulp.task('sample', () => {
  return gulp.src('app/shared/api/sample.json')
    .pipe(gulp.dest(`${files.dest.dir}/sample`));
});


/**
 *  BUILD IT ALL!!!
 */
gulp.task('default', [], cb => {
  runSequence('clean', 'inject-version', 'template-cache', ['sample', 'assets', 'html', 'js', 'styles'], ['qa', 'docs'], cb);
});
