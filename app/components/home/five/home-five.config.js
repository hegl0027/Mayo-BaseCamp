import ctrl from './home-five.controller';
import template from './home-five.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.five', {
      url: '/five',
      controller: ctrl,
      controllerAs: 'homeFive',
      template
    });
};

export default stateConfig;
