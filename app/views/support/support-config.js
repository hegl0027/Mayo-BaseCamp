'use strict';

import angular from 'angular';
import SupportController from './support-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.support', {
            url: '/support',
            controller: SupportController,
            controllerAs: 'support',
            data: {
                title: 'Support',
                hasSecondaryNav: false
            },
            templateProvider: ($templateCache) => $templateCache.get('support/support.html')
        });
};

export default angular.module('app.support', [])
    .config(stateConfig);

