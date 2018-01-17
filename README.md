[![Build Status](http://tfs:8080/tfs/MayoClinic/_apis/public/build/definitions/2f49d3e6-4c50-4efe-9a92-a45130cc4a0a/545/badge)](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp?path=%2F&version=GBdevelop&_a=contents)

# Get Started with DSS's Mayo Web Basecamp 
## Purpose
This project kick-starts development of an Angular Front-end application.

## Notable Technologies
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

## Prerequisites
1. [Git](https://git-scm.com/downloads) - A command line interface (CLI) comes with the git install.  There are also GUI clients available (SourceTree, GitKraken).
2. [NodeJS](https://nodejs.org/en/) - After installing, Update to the latest NPM version:
  ```bash
  npm install -g npm
  ```

__Gotcha__: Node and npm need to have a C++ compiler to build some of the dependencies for use by Node.
- The C++ compiler may have been installed with with Visual Studio, if not get [Microsoft C++ Redistributable 2012](https://www.microsoft.com/en-us/download/details.aspx?id=30679)
- _without_ Visual Studio, use [Microsoft Windows SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)

## Setup

### Getting the source code and installing dependencies
Clone or download the repo and `npm install` the dependencies in the web project root directory.
1. Command Line:
  ```
  git clone http://tfs:8080/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp 
  ```

2. Command Line: Change directory into the newly cloned project folder (example: `cd path/to/new/project`).

3. Command Line: npm will install all required dependencies listed in the project folder's local `package.json`
  ```
  npm install
  ```

__Note:__ The `npm install` may take some time on Windows, as the virus scan will scan these installed files.

## Usage
### Angular CLI 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

### Development server
Once the required npm packages have been installed, npm (NodeJS) is used to run the application.

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
__Note:__ This process runs until it is manually terminated `Ctrl + c` 
__Note:__ This process can be alteratively ran with: `ng serve --host 0.0.0.0 --disable-host-check --public-host <HOSTNAME>:<PORT>` if running in a VM.  This allows an external PC to reach the site within the VM.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
The application will eventually be distributed, a developer can use the script below to build / bundle the application for distribution.

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

__Note:__ The TFS build configuration will likely have a build step that executes this same script, it is good practice to ensure this command works before attempting a TFS build.

See also: [(NPM Scripts)](https://docs.npmjs.com/misc/scripts)

### Running unit tests
The unit test files should be in the same path as the file it is testing. Test files should have a filename that matches that of the code they are testing. (ex. 'redApple.component.ts' would have a test file 'redApple.component.spec.ts')

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

__Note:__ For test coverage report, run `ng test --code-coverage`, the report will be output to /coverage. Open the /coverage/index.html to browse the coverage report.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Guides to Extending Basecamp
| Title and Link | Description |
| ---   | ---- | 
| | | 

### File Naming Convention
File names should use kebab case for the base name (with dot notation to indicate a semantic type if applicable), e.g., "my-super-awesome-test-suite.spec.ts".

|  File Type / Ext.  |  Description  |
|  ---  |  ---  |
|  *.config.ts  |  Module/State configuration  |
|  *.component.ts  |  Component |
|  *.service.ts  |  Service |
|  *.directive.ts  |  Directive configuration  |
|  *.filter.ts  | Filter configuration
|  *.spec.ts  |  Test specification  |

-----
## Documentation needing updates (not fully supported)

### Syntax and Style ([ESLint](http://eslint.org/) and [SCSSLint](https://github.com/brigade/scss-lint))

### E2E Testing ([Protractor](http://www.protractortest.org/#/))
The Protractor tests live under the 'e2e-tests' folder
Dependent on HTTP Server
Available browser configs: firefox, chrome, ie, safari

|  Command  |  Description  |
|  -------  |  -----------  |
|  npm run protractor-<browser>  |  Execute the Protractor test suite for a given browser  |
|  npm run protractor-<browser>-q  |  Execute the Protractor test suite for a given browser, less the webdriver update  |
|  npm run protractor-<browser>-q -- --spec e2e-tests/<path to specs>  |  Execute Protractor against a specific set of spec files for a given browser  |

### API Tests ([Mocha](https://mochajs.org/) and [SuperTest](https://github.com/visionmedia/supertest))
The REST API tests live under the 'api-tests' folder
Dependent on HTTP Server

|  Command  |  Description  |
|  ---  |  ---  |
|  npm run api-tests  |  Execute the api tests  |


