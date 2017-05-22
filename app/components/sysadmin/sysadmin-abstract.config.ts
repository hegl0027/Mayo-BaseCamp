import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './sysadmin-abstract.component';
import {AdminOneComponent} from './one/sysadmin-one.component';
import {AdminTwoComponent} from './two/sysadmin-two.component';
import {AdminThreeComponent} from './three/sysadmin-three.component';


const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'one', component: AdminOneComponent },
      { path: 'two', component: AdminTwoComponent },
      { path: 'three', component: AdminThreeComponent },
      { path: '', redirectTo: 'one', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminComponent,
    AdminOneComponent,
    AdminTwoComponent,
    AdminThreeComponent
  ]
})
export class AdminModule {};

