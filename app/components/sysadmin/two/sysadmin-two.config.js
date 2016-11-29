import AdminTwoController from './sysadmin-two.controller';
import template from './sysadmin-two.html';

const stateTree = {
  name: 'two',
  url: '/two',
  controller: AdminTwoController,
  controllerAs: 'adminTwo',
  template
};

export default stateTree;
