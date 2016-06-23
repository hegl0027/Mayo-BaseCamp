'use strict';

import angular from 'angular';
import patterns from './patterns/design-patterns-config';
import components from './components/design-components-config';
import overview from './overview/design-overview-config';
import foundations from './foundations/design-foundations-config';
import onboarding from './onboarding/design-onboarding-config';
import DesignAbstractController from './design-abstract-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design', {
            abstract: true,
            url: '/design',
            controller: DesignAbstractController,
            controllerAs: 'abstractDesign',
            data: {
                title: 'Design'
            },
            templateProvider: ($templateCache) => $templateCache.get('design/design-abstract.html')
        });
};

export default angular.module('app.design', [
        patterns.name,
        components.name,
        foundations.name,
        onboarding.name,
        overview.name
    ])
    .config(['$stateProvider', stateConfig]);
