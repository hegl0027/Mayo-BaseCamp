import HomeThreeController from './home-three.controller';
import template from './home-three.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.home.three', {
      url: '/three',
      controller: HomeThreeController,
      controllerAs: 'homeThree',
      template
    });
};

export default stateConfig;
