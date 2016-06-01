'use strict';

import angular from 'angular';

function SupportController() {

}

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
            templateProvider: function ($templateCache) {
                return $templateCache.get('support/support.html');
            }
        });
};

export default angular.module('app.support', [])
    .config(stateConfig);

