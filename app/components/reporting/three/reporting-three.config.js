import ReportingThreeController from './reporting-three.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.three', {
      url: '/three',
      controller: ReportingThreeController,
      controllerAs: 'reportingThree',
      templateProvider: (templates) => templates.get('reporting/three/reporting-three.html')
    });
};

export default stateConfig;
