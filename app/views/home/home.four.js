'use strict';

import angular from 'angular';

function HomeFourController() {

}

var homeFourStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.four', {
            url: '/four',
            controller: HomeFourController,
            controllerAs: 'homeFour',
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.four.html');
            }
        });
};

export default angular.module('app.home.four', [])
    .config(homeFourStateConfig);
