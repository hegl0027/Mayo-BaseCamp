'use strict';

import angular from 'angular';
import AnimationController from './design-animation-controller';

var componentsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.animation', {
            url: '/animation',
            controller: AnimationController,
            controllerAs: 'components',
            templateProvider: ($templateCache) => $templateCache.get('design/animation/design-animation.html')
        });
};

export default angular.module('app.design.animation', [])
    .config(componentsStateConfig);