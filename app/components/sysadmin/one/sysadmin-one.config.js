import controller from './sysadmin-one.controller';
import template from './sysadmin-one.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin.one', {
      url: '/one',
      controllerAs: 'adminOne',
      controller,
      template
    });
};

export default stateConfig;

