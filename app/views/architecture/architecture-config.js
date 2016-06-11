'use strict';

import angular from 'angular';
import ArchitectureController from './architecture-controller';

let architectureStateConfig = $stateProvider => {

    $stateProvider
        .state('app.architecture', {
            url: '/architecture',
            controller: ArchitectureController,
            controllerAs: 'architecture',
            data: {
                title: 'Architecture',
                hasSecondaryNav: false
            },
            templateProvider: ($templateCache) => $templateCache.get('architecture/architecture.html')
        });
};

export default angular.module('app.architecture', [])
    .config(architectureStateConfig);
