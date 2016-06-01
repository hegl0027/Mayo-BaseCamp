'use strict';

import angular from 'angular';

function PatternsController() {

}

var patternsStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.patterns', {
            url: '/patterns',
            controller: PatternsController,
            controllerAs: 'patterns',
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/patterns/design.patterns.html');
            }
        });
};

export default angular.module('app.design.patterns', [])
    .config(patternsStateConfig);
