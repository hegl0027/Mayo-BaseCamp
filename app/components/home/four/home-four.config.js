import HomeFourController from './home-four.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.four', {
      url: '/four',
      controller: HomeFourController,
      controllerAs: 'homeFour',
      templateProvider: (templateCache) => templateCache.get('home/four/home-four.html')
    });
};

export default stateConfig;
