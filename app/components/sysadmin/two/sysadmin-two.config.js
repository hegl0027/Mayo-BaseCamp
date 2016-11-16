import AdminTwoController from './sysadmin-two.controller';
import template from './sysadmin-two.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin.two', {
      url: '/two',
      controller: AdminTwoController,
      controllerAs: 'adminTwo',
      template
    });
};

export default stateConfig;
