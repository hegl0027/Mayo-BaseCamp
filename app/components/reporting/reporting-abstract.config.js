'use strict';

import angular from 'angular';
import reportingOne from './one/reporting-one.config';
import reportingTwo from './two/reporting-two.config';
import reportingThree from './three/reporting-three.config';
import ReportingAbstractController from './reporting-abstract.controller';
import template from './reporting-abstract.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting', {
      abstract: true,
      url: '/reporting',
      controller: ReportingAbstractController,
      controllerAs: 'abstractReporting',
      data: {
        title: 'Reporting'
      },
      template
    });
};

export default angular.module('app.reporting', [])
  .config(['$stateProvider', stateConfig])
  .config(['$stateProvider', reportingOne])
  .config(['$stateProvider', reportingTwo])
  .config(['$stateProvider', reportingThree]);
