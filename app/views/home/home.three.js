'use strict';

import angular from 'angular';

function HomeThreeController() {

}

var homeThreeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.three', {
            url: '/three',
            controller: HomeThreeController,
            controllerAs: 'homeThree',
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.three.html');
            }
        });
};

export default angular.module('app.home.three', [])
    .config(homeThreeStateConfig);
