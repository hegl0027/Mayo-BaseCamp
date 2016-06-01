'use strict';

import angular from 'angular';
import reportingOne from './reporting.one';
import reportingTwo from './reporting.two';
import reportingThree from './reporting.three';

function AbstractReportingController() {

}

var abstractReportingStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting', {
            abstract: true,
            url: '/reporting',
            template: '<div ui-view class="partial__wrapper"></div>',
            controller: AbstractReportingController,
            controllerAs: 'abstractReporting',
            data: {
                title: 'Reporting',
                hasSecondaryNav: true
            }
        });
};

export default angular.module('app.reporting', [
    reportingOne.name,
    reportingTwo.name,
    reportingThree.name
])
    .config(abstractReportingStateConfig);
