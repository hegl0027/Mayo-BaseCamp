'use strict';

import angular from 'angular';

function ReportingOneController() {

}

var reportingOneStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting.one', {
            url: '/one',
            controller: ReportingOneController,
            controllerAs: 'reportingOne',
            templateProvider: function ($templateCache) {
                return $templateCache.get('reporting/reporting.one.html');
            }
        });
};

export default angular.module('app.reporting.one', [])
    .config(reportingOneStateConfig);
