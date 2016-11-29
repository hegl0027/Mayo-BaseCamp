import reportingOne from './one/reporting-one.config';
import reportingTwo from './two/reporting-two.config';
import reportingThree from './three/reporting-three.config';
import ReportingAbstractController from './reporting-abstract.controller';
import template from './reporting-abstract.html';

const stateTree = {
  name: 'reporting',
  abstract: true,
  url: '/reporting',
  controller: ReportingAbstractController,
  controllerAs: 'abstractReporting',
  data: {
    title: 'Reporting'
  },
  template,
  children: [
    reportingOne, reportingTwo, reportingThree
  ]
};

export default stateTree;

