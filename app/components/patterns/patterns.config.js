import angular from 'angular';
import PatternsController from './patterns.controller';
import template from './patterns.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.patterns', {
      url: '/patterns',
      controller: PatternsController,
      controllerAs: 'patterns',
      data: {
        title: 'Patterns'
      },
      template
    });
};

export default angular.module('app.patterns', [])
  .config(['$stateProvider', stateConfig]);
