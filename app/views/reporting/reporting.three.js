'use strict';

import angular from 'angular';

function ReportingThreeController() {

}

var reportingThreeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.three', {
            url: '/three',
            controller: ReportingThreeController,
            controllerAs: 'reportingThree',
            templateProvider: function ($templateCache) {
                return $templateCache.get('reporting/reporting.three.html');
            }
        });
};

export default angular.module('app.reporting.three', [])
    .config(reportingThreeStateConfig);
