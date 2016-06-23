'use strict';

import angular from 'angular';
import AccessibilityController from './accessibility-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.accessibility', {
            url: '/accessibility',
            controller: AccessibilityController,
            controllerAs: 'accessibility',
            data: {
                title: 'Accessibility'
            },
            templateProvider: ($templateCache) => $templateCache.get('accessibility/accessibility.html')
        });
};

export default angular.module('app.accessibility', [])
    .config(['$stateProvider', stateConfig]);

