'use strict';

import angular from 'angular';
import reportingOne from './one/reporting-one-config';
import reportingTwo from './two/reporting-two-config';
import reportingThree from './three/reporting-three-config';
import ReportingAbstractController from './reporting-abstract-controller';

var abstractReportingStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.reporting', {
            abstract: true,
            url: '/reporting',
            template: '<div ui-view class="partial__wrapper"></div>',
            controller: ReportingAbstractController,
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
