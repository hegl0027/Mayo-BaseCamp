import angular from 'angular';
import SupportController from './support.controller';
import template from './support.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.support', {
      url: '/support',
      controller: SupportController,
      controllerAs: 'support',
      data: {
        title: 'Support'
      },
      template
    });
};

export default angular.module('app.support', [])
  .config(['$stateProvider', stateConfig]);

