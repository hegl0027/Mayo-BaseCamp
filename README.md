[![Build Status](https://travis-ci.org/bradyhullopeter/Root.svg?branch=master)](https://travis-ci.org/bradyhullopeter/Root) [![devDependency Status](https://david-dm.org/bradyhullopeter/Root/dev-status.svg)](https://david-dm.org/bradyhullopeter/Root#info=devDependencies) [![Code Climate](https://codeclimate.com/github/bradyhullopeter/Root/badges/gpa.svg)](https://codeclimate.com/github/bradyhullopeter/Root) [![Issue Count](https://codeclimate.com/github/bradyhullopeter/Root/badges/issue_count.svg)](https://codeclimate.com/github/bradyhullopeter/Root)
#Get Started
###Prerequisites
1. Git
2. NodeJS
3. Ruby
  - [Windows](http://rubyinstaller.org/) -- use the installer option to add Ruby commands to the PATH
  - [Everyone else](https://www.ruby-lang.org/en/)

###Setup
```
gem install sass scss_lint
npm install -g gulp karma karma-cli protractor
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
gulp clean
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

###Karma
```
karma start karma.conf.js --no-auto-watch --single-run --reporters=dots
```

###Protractor
```
protractor e2e-tests/protractor.conf.js
```
