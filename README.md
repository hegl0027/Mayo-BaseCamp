[![Build Status](https://travis-ci.org/bradyhullopeter/root.svg?branch=master)](https://travis-ci.org/bradyhullopeter/root) [![devDependency Status](https://david-dm.org/bradyhullopeter/Root/dev-status.svg)](https://david-dm.org/bradyhullopeter/Root#info=devDependencies) [![Code Climate](https://codeclimate.com/github/bradyhullopeter/Root/badges/gpa.svg)](https://codeclimate.com/github/bradyhullopeter/Root) [![Issue Count](https://codeclimate.com/github/bradyhullopeter/Root/badges/issue_count.svg)](https://codeclimate.com/github/bradyhullopeter/Root) [![Test Coverage](https://codeclimate.com/github/bradyhullopeter/Root/badges/coverage.svg)](https://codeclimate.com/github/bradyhullopeter/Root/coverage)

#Get Started
###Prerequisites
1. [Git](https://git-scm.com/downloads)
2. [NodeJS](https://nodejs.org/en/)
3. Ruby
  - [Windows](http://rubyinstaller.org/) -- use the installer option to add Ruby commands to the PATH
  - [Everyone else](https://www.ruby-lang.org/en/)

###Setup
> Clone the repo and run the following from the web project root directory
```
gem install sass scss_lint
npm install -g gulp karma karma-cli protractor mocha
npm install
```

###Gulp
######Main Tasks
```
gulp
gulp watch
```

######Tasks that aren't inherently executed by the main tasks
```
gulp size
gulp qa
gulp docs
gulp webstandards
```

######Tasks that generate stuff outside of ./dist
```
gulp plato
gulp jsdoc
gulp todo
gulp clean-docs
```

###HTTP Server
```
npm start
```

###Karma
The unit test files (app/\*\*/\*_tests.js) should hang out with the the rest of the application code
```
npm test
npm run testq  <-- quick version without npm/bower install, single run
```

###Protractor
The Protractor tests live under the ./e2e-tests directory
> Dependent on HTTP Server
```
npm run protractor
npm run protractorq  <-- quick version without webdriver update
```

###REST API Tests
The REST API tests live under the ./test directory
> Dependent on HTTP Server
```
mocha
```
