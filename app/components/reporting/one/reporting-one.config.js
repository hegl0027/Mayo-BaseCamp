import ReportingOneController from './reporting-one.controller';
import template from './reporting-one.html';

const stateConfig = ($stateProvider) => {

  $stateProvider
    .state('app.reporting.one', {
      url: '/one',
      controller: ReportingOneController,
      controllerAs: 'reportingOne',
      template
    });
};

export default stateConfig;
