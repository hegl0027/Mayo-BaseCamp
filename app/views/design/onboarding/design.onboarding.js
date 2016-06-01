'use strict';

import angular from 'angular';

function OnboardingController() {

}

var onboardingStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.design.onboarding', {
            url: '/onboarding',
            controller: OnboardingController,
            controllerAs: 'onboarding',
            templateProvider: function ($templateCache) {
                return $templateCache.get('design/onboarding/design.onboarding.html');
            }
        });
};

export default angular.module('app.design.onboarding', [])
    .config(onboardingStateConfig);
