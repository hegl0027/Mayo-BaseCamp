import HomeTwoController from './home-two.controller';
import template from './home-two.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.two', {
      url: '/two',
      controller: HomeTwoController,
      controllerAs: 'homeTwo',
      template
    });
};

export default stateConfig;
