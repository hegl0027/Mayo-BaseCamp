'use strict';

import angular from 'angular';
import reportingOne from './one/reporting-one.config';
import reportingTwo from './two/reporting-two.config';
import reportingThree from './three/reporting-three.config';
import ReportingAbstractController from './reporting-abstract.controller';

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
      templateProvider: (templateCache) => templateCache.get('reporting/reporting-abstract.html')
    });
};

export default angular.module('app.reporting', [])
  .config(['$stateProvider', stateConfig])
  .config(['$stateProvider', reportingOne])
  .config(['$stateProvider', reportingTwo])
  .config(['$stateProvider', reportingThree]);
