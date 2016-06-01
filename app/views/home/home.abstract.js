'use strict';

import angular from 'angular';
import homeOne from './home.one';
import homeTwo from './home.two';
import homeThree from './home.three';
import homeFour from './home.four';
import homeFive from './home.five';

function AbstractHomeController() {

}

var abstractHomeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home', {
            abstract: true,
            url: '/home',
            controller: AbstractHomeController,
            controllerAs: 'abstractHome',
            data: {
                title: 'Home',
                hasSecondaryNav: true
            },
            templateProvider: function ($templateCache) {
                return $templateCache.get('home/home.abstract.html');
            }
        });
};

export default angular.module('app.home', [
    homeOne.name,
    homeTwo.name,
    homeThree.name,
    homeFour.name,
    homeFive.name
])
    .config(abstractHomeStateConfig);
