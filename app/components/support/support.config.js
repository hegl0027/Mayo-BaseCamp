import angular from 'angular';
import SupportController from './support.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.support', {
      url: '/support',
      controller: SupportController,
      controllerAs: 'support',
      data: {
        title: 'Support'
      },
      templateProvider: (templates) => templates.get('support/support.html')
    });
};

export default angular.module('app.support', [])
  .config(['$stateProvider', stateConfig]);

