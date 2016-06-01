'use strict';

import angular from 'angular';

function ReportingTwoController() {

}

var reportingTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.two', {
            url: '/two',
            controller: ReportingTwoController,
            controllerAs: 'reportingTwo',
            templateProvider: function ($templateCache) {
                return $templateCache.get('reporting/reporting.two.html');
            }
        });
};

export default angular.module('app.reporting.two', [])
    .config(reportingTwoStateConfig);
