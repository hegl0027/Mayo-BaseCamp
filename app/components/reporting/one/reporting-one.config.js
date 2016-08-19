import ReportingOneController from './reporting-one.controller';

var stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.one', {
      url: '/one',
      controller: ReportingOneController,
      controllerAs: 'reportingOne',
      templateProvider: (templates) => templates.get('reporting/one/reporting-one.html')
    });
};

export default stateConfig;
