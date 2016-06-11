'use strict';

import angular from 'angular';
import FoundationsController from './design-foundations-controller';

var foundationsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.foundations', {
            url: '/foundations',
            controller: FoundationsController,
            controllerAs: 'foundations',
            templateProvider: ($templateCache) => $templateCache.get('design/foundations/design-foundations.html')
        });
};

export default angular.module('app.design.foundations', [])
    .config(foundationsStateConfig);
