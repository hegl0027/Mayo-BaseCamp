[![Build Status](http://tfs:8080/tfs/MayoClinic/_apis/public/build/definitions/2f49d3e6-4c50-4efe-9a92-a45130cc4a0a/545/badge)](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp?path=%2F&version=GBdevelop&_a=contents)

#Get Started with DSS's Mayo Web Basecamp 
##Purpose
This project kick-starts development of an Angular Front-end application.

##Notable Technologies
- [Angular 2+](https://angular.io/) -- Framework for front-end web applications
- [TypeScript](https://www.typescriptlang.org/) -- A strongly-typed superset of the JavaScript language (all JavaScript is valid TypeScript). Much of the Angular2+ documentation is written for TypeScript.
  - Transpiler supporting JavaScript's ECMAScript 2015 standard ([modules](https://babeljs.io/docs/learn-es2015/#modules), [classes](https://babeljs.io/docs/learn-es2015/#classes), [template strings](https://babeljs.io/docs/learn-es2015/#template-strings), and [more](https://babeljs.io/docs/learn-es2015/))
- Unit Testing
  - [Karma](https://karma-runner.github.io/0.13/index.html) -- __Test runner__ for testing code in browsers.
  - [Mocha](https://mochajs.org) -- __Test framework__ for queuing tests and providing test status and result.
  - [Chai](http://chaijs.com/) -- BDD/TDD __Assertion library__ for making unit test assertions.
  - [Sinon](http://sinonjs.org/) -- Test spies, stubs, and mocks for unit tests.
- End to End Testing
  - [Protractor](http://www.protractortest.org/#/)
- [Sass](http://sass-lang.com/) -- CSS preprocessor
- [Babel (ES6)](https://babeljs.io/) 

##Prerequisites
1. [Git](https://git-scm.com/downloads) - A command line interface (CLI) comes with the git install.  There are also GUI clients available (SourceTree, GitKraken).
2. [NodeJS](https://nodejs.org/en/) - After installing, Update to the latest NPM version:
  ```bash
  npm install -g npm
  ```

##Setup

### Getting the source code and installing dependencies
Clone or download the repo and `npm install` the dependencies in the web project root directory.
1. Command Line:
  ```
  git clone http://tfs:8080/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp 
  ```

2. Command Line: npm will install all required dependencies listed in `package.json`
  ```
  npm install
  ```

__Note:__ The `npm install` may take some time on Windows, as the virus scan will scan these installed files.

##Usage

###Running the project
Once the required npm packages have been installed, npm (NodeJS) is used to run the application.
- Command Line: start bundler, unit tests, and webpack development server
  ```
  npm start 
  ```

After this command runs, navigate your browser to `localhost:8080`, Basecamp will be running in your browser.

__Note:__ This process runs until it is manually terminated `Ctrl + c` 

###Build System [(NPM Scripts)](https://docs.npmjs.com/misc/scripts)
The application will eventually be distributed, a developer can use the script below to build / bundle the application for distribution.
- Command Line: Execute the build process
  ```
  npm run build
  ```

__Note:__ The TFS build configuration will likely have a build step that executes this same script, it is good practice to ensure this command works before attempting a TFS build.

###Unit Testing ([Karma](https://karma-runner.github.io/0.13/index.html))
The unit test files (app/\*\*/\*.spec.*) should hang out with the the rest of the application code. Generally they should have a filename that matches that of the code they are testing. (ex. 'sample-controller.ts' would have a test file 'sample-controller.spec.ts')
- Command Line: Execute the unit tests, using karma as the test runner via 'mayo-build'
  ```
  npm run test
  ```

####Get Code Coverage by setting Environment Variable

__Code coverage__ can be enabled by setting the environment variable NODE_ENV to 'development'. The easiest way to do this is via a `.env` file, placed in the root of the project (this file is ignored by .gitignore).
```
NODE_ENV=development
```

You may also set environment variables for your process on:
  - [Windows Environment Variables](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms682653%28v=vs.85%29.aspx>) (`Advanced System Properties` -> `Advanced` tab -> `Environment Variables`)
  - *nix (`NODE_ENV=development npm test`)


###E2E Testing ([Protractor](http://www.protractortest.org/#/))
The Protractor tests live under the 'e2e-tests' folder
Dependent on HTTP Server
Available browser configs: firefox, chrome, ie, safari

|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run protractor-<browser>  |  Execute the Protractor test suite for a given browser  |
|  npm run protractor-<browser>-q  |  Execute the Protractor test suite for a given browser, less the webdriver update  |
|  npm run protractor-<browser>-q -- --spec e2e-tests/<path to specs>  |  Execute Protractor against a specific set of spec files for a given browser  |


###API Tests ([Mocha](https://mochajs.org/) and [SuperTest](https://github.com/visionmedia/supertest))
The REST API tests live under the 'api-tests' folder
Dependent on HTTP Server

|  Command  |  Description  |
|  ---  |  ---  |
|  npm run api-tests  |  Execute the api tests  |

## Guides to Extending Basecamp
| Title and Link | Description |
| ---   | ---- | 
| [01 A basic Component](./guide/01-extend-with-basic-component.md)| Adding a new Angular Component to Basecamp | 

##Additional Information
###Syntax and Style ([ESLint](http://eslint.org/) and [SCSSLint](https://github.com/brigade/scss-lint))
__Mayo-build__:lint Ensure code written within the application conforms to a common style and syntax.  Any errors print to the console.

###[Mayo Build](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/Innovation%20Sandbox/_git/mayo-build)
__Mayo Build__ is the entry point for most of the build tooling (webpack, karma, typedoc, etc.).

Each project can have a __mayo-build-config.json__ file where mayo-build can be configured.  When using mayo-build in a npm script, a specific configuration can be referenced for desired behavior in development, distribution, testing, or another task.


###Directory Structure
```
.
api-tests
app
|   components
|   shared
|   app.ts
|   app.module.ts
|   main.ts
|   index.html
assets
|   fonts
|   images
|   |   favicon
|   |   inline-svg
|   |   svg-bundle
|   
|   sass
|   |   app.scss
|   |   _base.scss
|   |   _normalize.scss
|   |   _variable.scss
|
dist
docs
e2e-tests
node_modules
reports
test-configs
.npmrc
package.json
README.md
TODO.md
```


###File Naming Convention
File names should use kebab case for the base name (with dot notation to indicate a semantic type if applicable), e.g., "my-super-awesome-test-suite.spec.ts".

|  File Type / Ext.  |  Description  |
|  ---  |  ---  |
|  *.config.ts  |  Module/State configuration  |
|  *.directive.ts  |  Directive configuration  |
|  *.filter.ts  | Filter configuration
|  *.controller.ts  |  Controller class  |
|  *.spec.ts  |  Test specification  |
|  *.page.ts  |  Object literal representing the UI elements the test cases will need to interact with.  |


