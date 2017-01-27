import {Component} from '@angular/core';

//import homeOne from './one/home-one.config';
//import homeTwo from './two/home-two.config';
//import homeThree from './three/home-three.config';
//import homeFour from './four/home-four.config';
//import homeFive from './five/home-five.config';
//import HomeAbstractController from './home-abstract.controller';
import template from './home-abstract.html';

@Component({
  template
})
export class HomeComponent { }

export const stateTree = {
  path: 'home',
  //controller: HomeAbstractController,
  //controllerAs: 'abstractHome',
  /*
  data: {
    title: 'Home'
  },
  */
  component: HomeComponent
  //children: [ homeOne, homeTwo, homeThree, homeFour, homeFive, ]
};

export default stateTree;
