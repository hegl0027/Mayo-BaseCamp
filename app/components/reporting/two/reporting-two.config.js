import controller from './reporting-two.controller';
import template from './reporting-two.html';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.two', {
      url: '/two',
      controllerAs: 'reportingTwo',
      controller,
      template
    });
};

export default stateConfig;
