import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportingComponent} from './reporting-abstract.component';

import {ReportingOneComponent} from './one/reporting-one.component';
import {ReportingTwoComponent} from './two/reporting-two.component';
import {ReportingThreeComponent} from './three/reporting-three.component';

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
