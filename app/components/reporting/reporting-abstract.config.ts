import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ReportingOneComponent} from './one/reporting-one.component';
import {ReportingTwoComponent} from './two/reporting-two.component';
import {ReportingThreeComponent} from './three/reporting-three.component';

import template from './reporting-abstract.html';

@Component({
  template
})
export class ReportingComponent {}

const reportingRoutes: Routes = [
  {
    path: '',
    component: ReportingComponent,
    children: [
      {path: 'one', component: ReportingOneComponent},
      {path: 'two', component: ReportingTwoComponent},
      {path: 'three', component: ReportingThreeComponent},
      {path: '', redirectTo: 'one', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(reportingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ReportingComponent,
    ReportingOneComponent,
    ReportingTwoComponent,
    ReportingThreeComponent
  ]
})
export class ReportingModule {}
