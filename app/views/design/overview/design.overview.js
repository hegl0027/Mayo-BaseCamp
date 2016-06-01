'use strict';

import angular from 'angular';

function OverviewController() {

}

var overviewStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.overview', {
            url: '/overview',
            controller: OverviewController,
            controllerAs: 'overview',
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/overview/design.overview.html');
            }
        });
};

export default angular.module('app.design.overview', [])
    .config(overviewStateConfig);
