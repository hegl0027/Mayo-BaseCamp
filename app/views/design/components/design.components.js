'use strict';

import angular from 'angular';

function ComponentsController() {

}

var componentsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.components', {
            url: '/components',
            controller: ComponentsController,
            controllerAs: 'components',
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/components/design.components.html');
            }
        });
};

export default angular.module('app.design.components', [])
    .config(componentsStateConfig);