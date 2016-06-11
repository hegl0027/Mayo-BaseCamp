'use strict';

import angular from 'angular';
import homeOne from './one/home-one-config';
import homeTwo from './two/home-two-config';
import homeThree from './three/home-three-config';
import homeFour from './four/home-four-config';
import homeFive from './five/home-five-config';
import HomeAbstractController from './home-abstract-controller';

var abstractHomeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home', {
            abstract: true,
            url: '/home',
            controller: HomeAbstractController,
            controllerAs: 'abstractHome',
            data: {
                title: 'Home',
                hasSecondaryNav: true
            },
            templateProvider: ($templateCache) => $templateCache.get('home/home-abstract.html')
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
