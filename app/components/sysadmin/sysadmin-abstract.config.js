import angular from 'angular';
import adminOne from './one/sysadmin-one.config';
import adminTwo from './two/sysadmin-two.config';
import adminThree from './three/sysadmin-three.config';
import AdminAbstractController from './sysadmin-abstract.controller';
import template from './sysadmin-abstract.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin', {
      abstract: true,
      url: '/admin',
      controller: AdminAbstractController,
      controllerAs: 'abstractAdmin',
      data: {
        title: 'Admin'
      },
      template
    });

};

export default angular.module('app.admin', [])
  .config(['$stateProvider', stateConfig])
  .config(['$stateProvider', adminOne])
  .config(['$stateProvider', adminTwo])
  .config(['$stateProvider', adminThree]);
