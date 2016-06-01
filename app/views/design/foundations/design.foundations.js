'use strict';

import angular from 'angular';

function FoundationsController() {

}

var foundationsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.foundations', {
            url: '/foundations',
            controller: FoundationsController,
            controllerAs: 'foundations',
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/foundations/design.foundations.html');
            }
        });
};

export default angular.module('app.design.foundations', [])
    .config(foundationsStateConfig);
