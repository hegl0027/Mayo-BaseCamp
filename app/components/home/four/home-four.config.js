import HomeFourController from './home-four.controller';
import template from './home-four.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.four', {
      url: '/four',
      controller: HomeFourController,
      controllerAs: 'homeFour',
      template
    });
};

export default stateConfig;
