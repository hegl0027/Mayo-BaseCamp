'use strict';

import angular from 'angular';
import OnboardingController from './design-onboarding-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.onboarding', {
            url: '/onboarding',
            controller: OnboardingController,
            controllerAs: 'onboarding',
            templateProvider: ($templateCache) => $templateCache.get('design/onboarding/design-onboarding.html')
        });
};

export default angular.module('app.design.onboarding', [])
    .config(['$stateProvider', stateConfig]);
