'use strict';

import angular from 'angular';

function HomeFiveController() {

}

var homeFiveStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.five', {
            url: '/five',
            controller: HomeFiveController,
            controllerAs: 'homeFive',
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.five.html');
            }
        });
};

export default angular.module('app.home.five', [])
    .config(homeFiveStateConfig);
