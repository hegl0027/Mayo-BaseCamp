'use strict';

import angular from 'angular';
import patterns from './patterns/design.patterns';
import components from './components/design.components';
import overview from './overview/design.overview';
import foundations from './foundations/design.foundations';
import onboarding from './onboarding/design.onboarding';

function AbstractDesignController() {

}

var abstractDesignStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design', {
            abstract: true,
            url: '/design',
            controller: AbstractDesignController,
            controllerAs: 'abstractDesign',
            data: {
                title: 'Design',
                hasSecondaryNav: true
            },
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/design.abstract.html');
            }
        });
};

export default angular.module('app.design', [
        patterns.name,
        components.name,
        foundations.name,
        onboarding.name,
        overview.name
    ])
    .config(abstractDesignStateConfig);
