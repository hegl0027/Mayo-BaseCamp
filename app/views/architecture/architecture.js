'use strict';

import angular from 'angular';

function ArchitectureController() {

}

var architectureStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.architecture', {
            url: '/architecture',
            controller: ArchitectureController,
            controllerAs: 'architecture',
            data: {
                title: 'Architecture',
                hasSecondaryNav: false
            },
            templateProvider: function ($templateCache) {
                return $templateCache.get('architecture/architecture.html');
            }
        });
};

export default angular.module('app.architecture', [])
    .config(architectureStateConfig);
