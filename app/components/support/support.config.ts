import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import template from './support.html';

@Component({
  template
})
class SupportComponent {};

const supportRoutes: Routes = [
  {
    path: '', component: SupportComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(supportRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    SupportComponent
  ]
})
export class SupportModule {};

