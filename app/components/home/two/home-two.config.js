import HomeTwoController from './home-two.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.two', {
      url: '/two',
      controller: HomeTwoController,
      controllerAs: 'homeTwo',
      templateProvider: (templates) => templates.get('home/two/home-two.html')
    });
};

export default stateConfig;
