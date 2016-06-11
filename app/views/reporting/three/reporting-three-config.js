'use strict';

import angular from 'angular';
import ReportingThreeController from './reporting-three-controller';

var reportingThreeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.three', {
            url: '/three',
            controller: ReportingThreeController,
            controllerAs: 'reportingThree',
            templateProvider: ($templateCache) => $templateCache.get('reporting/reporting.three.html')
        });
};

export default angular.module('app.reporting.three', [])
    .config(reportingThreeStateConfig);