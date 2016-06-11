'use strict';

import angular from 'angular';
import ReportingTwoController from './reporting-two-controller';

var reportingTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.two', {
            url: '/two',
            controller: ReportingTwoController,
            controllerAs: 'reportingTwo',
            templateProvider: ($templateCache) => $templateCache.get('reporting/reporting.two.html')
        });
};

export default angular.module('app.reporting.two', [])
    .config(reportingTwoStateConfig);
