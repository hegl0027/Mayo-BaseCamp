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

export default stateConfig;
