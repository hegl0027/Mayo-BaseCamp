import AdminOneController from './sysadmin-one.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.admin.one', {
      url: '/one',
      controller: AdminOneController,
      controllerAs: 'adminOne',
      templateProvider: (templateCache) => templateCache.get('sysadmin/one/sysadmin-one.html')
    });
};

export default stateConfig;

