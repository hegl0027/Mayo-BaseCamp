import homeOne from './one/home-one.config';
import homeTwo from './two/home-two.config';
import homeThree from './three/home-three.config';
import homeFour from './four/home-four.config';
import homeFive from './five/home-five.config';
import HomeAbstractController from './home-abstract.controller';
import template from './home-abstract.html';

export const stateTree = {
  abstract: true,
  url: '/home',
  controller: HomeAbstractController,
  controllerAs: 'abstractHome',
  data: {
    title: 'Home'
  },
  template,
  name: 'home',
  children: [ homeOne, homeTwo, homeThree, homeFour, homeFive, ]
};

export default stateTree;
