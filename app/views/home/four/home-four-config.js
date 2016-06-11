'use strict';

import angular from 'angular';
import HomeFourController from './home-four-controller';

var homeFourStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.four', {
            url: '/four',
            controller: HomeFourController,
            controllerAs: 'homeFour',
            templateProvider: ($templateCache) => $templateCache.get('home/home-four.html')
        });
};

export default angular.module('app.home.four', [])
    .config(homeFourStateConfig);
