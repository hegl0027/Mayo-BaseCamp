import SupportController from './support.controller';
import template from './support.html';

const stateTree = {
  name: 'support',
  url: '/support',
  controller: SupportController,
  controllerAs: 'support',
  data: {
    title: 'Support'
  },
  template
};

export default stateTree;

