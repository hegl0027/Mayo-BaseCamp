import angular from 'angular';
import AdminTwoController from './sysadmin-two.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin.two', {
      url: '/two',
      controller: AdminTwoController,
      controllerAs: 'adminTwo',
      templateProvider: ($templateCache) => $templateCache.get('sysadmin/two/sysadmin-two.html')
    });
};

export default angular.module('app.admin.two', [])
  .config(['$stateProvider', stateConfig]);
