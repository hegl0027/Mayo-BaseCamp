'use strict';

import angular from 'angular';

function HomeOneController() {

}

var homeOneStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.one', {
            url: '/one',
            controller: HomeOneController,
            controllerAs: 'homeOne',
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.one.html');
            }
        });
};

export default angular.module('app.home.one', [])
    .config(homeOneStateConfig);
