'use strict';

import angular from 'angular';
import PatternsController from './design-patterns-controller';

var patternsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.patterns', {
            url: '/patterns',
            controller: PatternsController,
            controllerAs: 'patterns',
            templateProvider: ($templateCache) => $templateCache.get('design/patterns/design-patterns.html')
        });
};

export default angular.module('app.design.patterns', [])
    .config(patternsStateConfig);
