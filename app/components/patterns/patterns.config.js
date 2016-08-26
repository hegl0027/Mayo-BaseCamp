import angular from 'angular';
import PatternsController from './patterns.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.patterns', {
      url: '/patterns',
      controller: PatternsController,
      controllerAs: 'patterns',
      data: {
        title: 'Patterns'
      },
      templateProvider: (templateCache) => templateCache.get('patterns/patterns.html')
    });
};

export default angular.module('app.patterns', [])
  .config(['$stateProvider', stateConfig]);
