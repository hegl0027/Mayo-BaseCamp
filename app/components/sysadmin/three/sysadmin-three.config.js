import AdminThreeController from './sysadmin-three.controller';
import template from './sysadmin-three.html';

const stateTree = {
  name: 'three',
  url: '/three',
  controller: AdminThreeController,
  controllerAs: 'adminThree',
  template
};

export default stateTree;
