var base = require('./protractor.base.config');

base.config.capabilities = {
    'browserName': 'safari'
}

exports.config = base.config;