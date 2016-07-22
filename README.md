<img class="build-badge" data-bind="attr: { 'src': buildBadgeImgUrl }, click: onBadgeClick, visible: !canShowLoading() &amp;&amp; canShowUpsell()" src="http://tfs:8080/tfs/MayoClinic/bdf4d5db-f911-44d8-8e1f-af0cae720b80/_apis/build/repos/TfsGit/badge?branchName=refs%2fheads%2fmaster&amp;repoId=a97a293f-dc87-4bee-a8dd-85c0f496779f"> [![Dependency Status](https://david-dm.org/bradyhullopeter/Root.svg)](https://david-dm.org/bradyhullopeter/Root) [![devDependency Status](https://david-dm.org/bradyhullopeter/Root/dev-status.svg)](https://david-dm.org/bradyhullopeter/Root#info=devDependencies) [![Code Climate](https://codeclimate.com/github/bradyhullopeter/Root/badges/gpa.svg)](https://codeclimate.com/github/bradyhullopeter/Root) [![Issue Count](https://codeclimate.com/github/bradyhullopeter/Root/badges/issue_count.svg)](https://codeclimate.com/github/bradyhullopeter/Root)


#Get Started
###Notable Technologies
- AngularJS 1.x
- Gulp
- Sass
- Babel (ES6)

###Prerequisites
1. [Git](https://git-scm.com/downloads)
2. [NodeJS](https://nodejs.org/en/)
  - Update to the latest NPM version
  ```
  npm install -g npm
  ```
3. Ruby
  - [Windows](http://rubyinstaller.org/) -- use the installer option to add Ruby commands to the PATH
  - [Everyone else](https://www.ruby-lang.org/en/)

###Setup
> - Clone or download the repo and run the following from the web project root directory
```
gem install sass scss_lint
npm install
```

###Gulp
######Main Tasks
```
npm run gulp
npm run gulp watch
```

######Tasks that generate stuff outside of the 'dist' folder
```
npm run gulp plato
npm run gulp jsdoc
npm run gulp todo
```

###HTTP Server
```
npm start
```

###Karma
The unit test files (app/\*\*/\*.spec.js) should hang out with the the rest of the application code
```
npm run karma
npm run karma-q  <-- quick version without npm/bower install, single run
```

###Protractor
The Protractor tests live under the 'e2e-tests' folder
> - Dependent on HTTP Server
- Available browser configs: firefox, chrome, ie, safari
```
npm run protractor-[browser]
npm run protractor-[browser]-q  <-- quick version without webdriver update
```

###REST API Tests
The REST API tests live under the 'api-tests' folder
> Dependent on HTTP Server
```
npm run api-tests
```
