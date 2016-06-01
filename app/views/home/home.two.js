'use strict';

import angular from 'angular';

function HomeTwoController() {

}

var homeTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.two', {
            url: '/two',
            controller: HomeTwoController,
            controllerAs: 'homeTwo',
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.two.html');
            }
        });
};

export default angular.module('app.home.two', [])
    .config(homeTwoStateConfig);
