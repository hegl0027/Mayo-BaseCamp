'use strict';

import angular from 'angular';
import HomeTwoController from './home-two-controller';

var homeTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.two', {
            url: '/two',
            controller: HomeTwoController,
            controllerAs: 'homeTwo',
            templateProvider: ($templateCache) => $templateCache.get('home/home-two.html')
        });
};

export default angular.module('app.home.two', [])
    .config(homeTwoStateConfig);
