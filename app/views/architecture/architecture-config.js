'use strict';

import angular from 'angular';
import ArchitectureController from './architecture-controller';

let stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.architecture', {
            url: '/architecture',
            controller: ArchitectureController,
            controllerAs: 'architecture',
            data: {
                title: 'Architecture'
            },
            templateProvider: ($templateCache) => $templateCache.get('architecture/architecture.html')
        });
};

export default angular.module('app.architecture', [])
    .config(['$stateProvider', stateConfig]);
