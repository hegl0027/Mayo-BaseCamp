import ReportingTwoController from './reporting-two.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.two', {
      url: '/two',
      controller: ReportingTwoController,
      controllerAs: 'reportingTwo',
      templateProvider: ($templateCache) => $templateCache.get('reporting/two/reporting-two.html')
    });
};

export default stateConfig;
