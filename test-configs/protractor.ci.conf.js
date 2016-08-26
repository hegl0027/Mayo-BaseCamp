var exec = require('child_process').exec;
var base = require('./protractor.base.config');
var serve;

base.config.capabilities = {
  browserName: 'chrome',
  chromeOnly: true,
  directConnect: true,

  /*
   * Can be used to specify the phantomjs binary path.
   * This can generally be ommitted if you installed phantomjs globally.
   */
  'phantomjs.binary.path': require('phantomjs-prebuilt').path,

  /*
   * Command line args to pass to ghostdriver, phantomjs's browser driver.
   * See https://github.com/detro/ghostdriver#faq
   */
  'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
};

// A callback function called once configs are read but before any environment
// setup. This will only run once, and before onPrepare.
// You can specify a file containing code to run by setting beforeLaunch to
// the filename string.
base.config.beforeLaunch = function () {
  console.log('************* Starting local http server *************');
  serve = exec('npm start', function (err) {
    if (err) {
      console.error(err);
    }
  });
};

// A callback function called once the tests have finished running and
// the WebDriver instance has been shut down. It is passed the exit code
// (0 if the tests passed). This is called once per capability.
base.config.onCleanUp = function () {
  // At this point, tests will be done but global objects will still be
  // available.
  if (serve) {
    console.log('************* Stopping local http server *************');
    serve.kill();
  }
};


exports.config = base.config;