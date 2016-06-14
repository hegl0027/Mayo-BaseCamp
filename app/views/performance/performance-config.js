'use strict';

import angular from 'angular';
import PerformanceController from './performance-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.performance', {
            url: '/performance',
            controller: PerformanceController,
            controllerAs: 'performance',
            data: {
                title: 'Performance',
                hasSecondaryNav: false
            },
            templateProvider: ($templateCache) => $templateCache.get('performance/performance.html')
        });
};

export default angular.module('app.performance', [])
    .config(stateConfig);

