import angular from 'angular';
import HomeTwoController from './home-two.controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.two', {
            url: '/two',
            controller: HomeTwoController,
            controllerAs: 'homeTwo',
            templateProvider: ($templateCache) => $templateCache.get('home/two/home-two.html')
        });
};

export default angular.module('app.home.two', [])
    .config(['$stateProvider', stateConfig]);
