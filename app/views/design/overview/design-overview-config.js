'use strict';

import angular from 'angular';
import OverviewController from './design-overview-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.overview', {
            url: '/overview',
            controller: OverviewController,
            controllerAs: 'overview',
            templateProvider: ($templateCache) => $templateCache.get('design/overview/design-overview.html')
        });
};

export default angular.module('app.design.overview', [])
    .config(['$stateProvider', stateConfig]);
