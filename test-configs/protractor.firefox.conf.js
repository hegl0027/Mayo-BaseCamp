var base = require('./protractor.base.config');

base.config.capabilities = {
    'browserName': 'firefox'
}

exports.config = base.config;