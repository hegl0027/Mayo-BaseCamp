import ReportingThreeController from './reporting-three.controller';
import template from './reporting-three.html';

const stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.three', {
      url: '/three',
      controller: ReportingThreeController,
      controllerAs: 'reportingThree',
      template
    });
};

export default stateConfig;
