'use strict';

import angular from 'angular';
import ctrl from './architecture.controller';

let architectureStateConfig = $stateProvider => {

    $stateProvider
        .state('app.architecture', {
            url: '/architecture',
            controller: ctrl,
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
