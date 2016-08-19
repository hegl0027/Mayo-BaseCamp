import HomeOneController from './home-one.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.one', {
      url: '/one',
      controller: HomeOneController,
      controllerAs: 'homeOne',
      templateProvider: (templates) => templates.get('home/one/home-one.html')
    });
};

export default stateConfig;
