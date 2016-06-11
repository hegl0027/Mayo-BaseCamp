'use strict';

import angular from 'angular';
import ReportingOneController from './reporting-one-controller';

var reportingOneStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.one', {
            url: '/one',
            controller: ReportingOneController,
            controllerAs: 'reportingOne',
            templateProvider: ($templateCache) => $templateCache.get('reporting/reporting.one.html')
        });
};

export default angular.module('app.reporting.one', [])
    .config(reportingOneStateConfig);
