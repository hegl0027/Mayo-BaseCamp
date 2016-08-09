[![Build Status](http://tfs:8080/tfs/MayoClinic/_apis/public/build/definitions/bdf4d5db-f911-44d8-8e1f-af0cae720b80/536/badge)](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network_Git/_git/mc-web-blueprint?path=%2F&version=GBmaster&_a=contents)

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
npm run gulp
npm start
```

###Build System (main tasks)
|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run gulp  |  Execute entire build  |
|  npm run gulp watch  |  Watch for file updates and run corresponding build tasks  |
|  npm start  |  Serve ./dist on local http server  |


###Unit Testing (Karma)
######The unit test files (app/\*\*/\*.spec.js) should hang out with the the rest of the application code
|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run karma  |  Execute Karma test runner;  autowatch true  |
|  npm run kara-q  |  Execute Karma test runner;  autowatch false;  single run  |


###E2E Testing (Protractor)
######The Protractor tests live under the 'e2e-tests' folder
######Dependent on HTTP Server
######Available browser configs: firefox, chrome, ie, safari
|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run protractor-[browser]  |  Execute the Protractor test suite for a given browser  |
|  npm run protractor-[browser]-q  |  Execute the Protractor test suite for a given browser, less the webdriver update  |


###REST API Tests
######The REST API tests live under the 'api-tests' folder
######Dependent on HTTP Server
|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run api-tests  |  Execute the api tests  |
