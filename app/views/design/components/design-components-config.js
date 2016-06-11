'use strict';

import angular from 'angular';
import ComponentsController from './design-components-controller';

var componentsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.components', {
            url: '/components',
            controller: ComponentsController,
            controllerAs: 'components',
            templateProvider: ($templateCache) => $templateCache.get('design/components/design-components.html')
        });
};

export default angular.module('app.design.components', [])
    .config(componentsStateConfig);