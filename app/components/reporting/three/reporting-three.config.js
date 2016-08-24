import ReportingThreeController from './reporting-three.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.three', {
      url: '/three',
      controller: ReportingThreeController,
      controllerAs: 'reportingThree',
      templateProvider: (templateCache) => templateCache.get('reporting/three/reporting-three.html')
    });
};

export default stateConfig;
