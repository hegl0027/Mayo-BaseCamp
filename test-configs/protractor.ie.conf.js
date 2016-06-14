var base = require('./protractor.base.config');

base.config.capabilities = {
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11'
};

base.config.seleniumArgs = ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer_x64_2.52.0.exe'];

exports.config = base.config;