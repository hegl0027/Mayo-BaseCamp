import AdminThreeController from './sysadmin-three.controller';
import template from './sysadmin-three.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin.three', {
      url: '/three',
      controller: AdminThreeController,
      controllerAs: 'adminThree',
      template
    });
};

export default stateConfig;
