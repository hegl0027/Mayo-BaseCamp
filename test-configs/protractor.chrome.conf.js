var base = require('./protractor.base.config');

base.config.capabilities = {
    'browserName': 'chrome'
}

exports.config = base.config;