import angular from 'angular';
import HomeOneController from './home-one.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.one', {
      url: '/one',
      controller: HomeOneController,
      controllerAs: 'homeOne',
      templateProvider: ($templateCache) => $templateCache.get('home/one/home-one.html')
    });
};

export default angular.module('app.home.one', [])
  .config(['$stateProvider', stateConfig]);
