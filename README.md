[![Build Status](http://tfs.mayo.edu/tfs/MayoClinic/_apis/public/build/definitions/2f49d3e6-4c50-4efe-9a92-a45130cc4a0a/545/badge)](http://tfs/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp?path=%2F&version=GBdevelop&_a=contents)

# Get Started with DSS's Mayo Web Basecamp

## Purpose

This project kick-starts development of an Angular Front-end application.

## Notable Technologies

- [Angular 2+](https://angular.io/) -- Framework for front-end web applications
- [TypeScript](https://www.typescriptlang.org/) -- A strongly-typed superset of the JavaScript language (all JavaScript is valid TypeScript). Much of the Angular2+ documentation is written for TypeScript. Transpiler (to ES5) + type checker.
- Unit Testing
  - [Karma](https://karma-runner.github.io/0.13/index.html) -- __Test runner__ for testing code in browsers.
  - [Jasmine](https://jasmine.github.io/) -- __Test framework__ for queuing tests and providing test status and result.
- [Sass](http://sass-lang.com/) -- CSS preprocessor

## Prerequisites

__NOTE:__ You may need to be running as administrator to perform some of these tasks.

1. Angular CLI - a command line interface (CLI) for creating angular templates.

```bash
npm install --global @angluar/cli
```

2. [Git](https://git-scm.com/downloads) - A command line interface (CLI) comes with the git install.  There are also GUI clients available (SourceTree, GitKraken).

3. [NodeJS](https://nodejs.org/en/) - After installing, Update to the latest NPM
  version:
  ```bash
  npm install -g npm
  ```
4. **Windows Build Tools & python** - npm needs to have a C++ compiler and python to build some of the dependencies. If not already installed this command will install the necessary support:
  ```bash
  npm install --global --production windows-build-tools
  ```

## Setup

### Getting the source code and installing dependencies

Clone or download the repo and `npm install` the dependencies in the web project root directory.

1. Command Line:
  ```bash
  git clone http://tfs.mayo.edu/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp <path/to/new/project>
  ```
  where <path/to/new/project> is the location to install the new project and the new project name. If this is not provided, the clone will default to mayo-web-basecamp.

2. Command Line: Change directory into the newly cloned project folder (example: `cd path/to/new/project`).

3. Command Line: npm will install all required dependencies listed in the project folder's local `package.json`
  ```bash
  npm install
  ```

__Note:__ The `npm install` may take some time on Windows, as the virus scan will scan these installed files.

__Note:__ There may be some WARN messages during npm install. These can be ignored.

## Usage

### Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

### To use the Angular CLI commands, it MUST be installed globally:
```bash
npm install --global @angluar/cli
```

### Development server

Once the required npm packages have been installed, npm (NodeJS) is used to run the application.

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

__Note:__ This process runs until it is manually terminated `Ctrl + c`

__Note:__ This process can be alteratively ran if running in a VM. This allows an external PC to reach the site within the VM:

```bash
ng serve --host 0.0.0.0 --disable-host-check --public-host <HOSTNAME>:<PORT>
```

__Note:__ If an error is received about @angular/cli missing or 'Unable to find any apps in `.angular-cli.json`.' it is likely due to a corrupt install. Remove the node_modules directory, the package-lock.json file (if it exists) and run `npm install` again.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. This can be shortened to `ng g c component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. For more details and examples see the Guides.

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
| 01-update-project-data <http://tfs.mayo.edu/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp/guide/01-update-project-data.md> | Basic updates to make the project unique
| 02-extend-with-basic-component <http://tfs.mayo.edu/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp/guide/02-extend-with-basic-component.md> | Example of creating a new basic component
| 03-add-additional-component-and-state <http://tfs.mayo.edu/tfs/MayoClinic/Mayo%20Open%20Developer%20Network/_git/mayo-web-basecamp/guide/03-add-service-for-data.md> | Adding a service to populate data

### File Naming Convention

File names should use kebab case for the base name (with dot notation to indicate a semantic type if applicable), e.g., "my-super-awesome-test-suite.spec.ts".

|  File Type / Ext.  |  Description  |
|  ---  |  ---  |
|  *.config.ts  |  Module/State configuration  |
|  *.component.ts  |  Component |
|  *.component.html |  Component html template|
|  *.component.scss |  Component style sheet|
|  *.service.ts  |  Service |
|  *.directive.ts  |  Directive configuration  |
|  *.filter.ts  | Filter configuration
|  *.spec.ts  |  Test specification  |