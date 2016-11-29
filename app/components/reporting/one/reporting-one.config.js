import ReportingOneController from './reporting-one.controller';
import template from './reporting-one.html';

const stateTree = {
  name: 'one',
  url: '/one',
  controller: ReportingOneController,
  controllerAs: 'reportingOne',
  template
};

export default stateTree;

