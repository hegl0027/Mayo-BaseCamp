import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import template from './patterns.html';

import * as styles from './patterns.scss';

@Component({
  template,
  styles: [styles._getCss()]
})
class PatternsComponent {};

const patternsRoutes: Routes = [
  {
    path: '',
    component: PatternsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(patternsRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    PatternsComponent
  ]
})
export class PatternsModule {};

