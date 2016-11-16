import angular from 'angular';
import homeOne from './one/home-one.config';
import homeTwo from './two/home-two.config';
import homeThree from './three/home-three.config';
import homeFour from './four/home-four.config';
import homeFive from './five/home-five.config';
import HomeAbstractController from './home-abstract.controller';
import template from './home-abstract.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home', {
      abstract: true,
      url: '/home',
      controller: HomeAbstractController,
      controllerAs: 'abstractHome',
      data: {
        title: 'Home'
      },
      template
    });
};

export default angular.module('app.home', [])
  .config(['$stateProvider', stateConfig])
  .config(['$stateProvider', homeOne])
  .config(['$stateProvider', homeTwo])
  .config(['$stateProvider', homeThree])
  .config(['$stateProvider', homeFour])
  .config(['$stateProvider', homeFive]);
