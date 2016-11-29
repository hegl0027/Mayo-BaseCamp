import PatternsController from './patterns.controller';
import template from './patterns.html';

const stateTree = {
  name: 'patterns',
  url: '/patterns',
  controller: PatternsController,
  controllerAs: 'patterns',
  data: {
    title: 'Patterns'
  },
  template
};

export default stateTree;

