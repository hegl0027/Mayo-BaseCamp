import adminOne from './one/sysadmin-one.config';
import adminTwo from './two/sysadmin-two.config';
import adminThree from './three/sysadmin-three.config';
import AdminAbstractController from './sysadmin-abstract.controller';
import template from './sysadmin-abstract.html';

const stateTree = {
  name: 'admin',
  abstract: true,
  url: '/admin',
  controller: AdminAbstractController,
  controllerAs: 'abstractAdmin',
  data: {
    title: 'Admin'
  },
  template,
  children: [ adminOne, adminTwo, adminThree ]
};

export default stateTree;

