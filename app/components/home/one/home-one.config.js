import HomeOneController from './home-one.controller';
import template from './home-one.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.one', {
      url: '/one',
      controller: HomeOneController,
      controllerAs: 'homeOne',
      template
    });
};

export default stateConfig;
