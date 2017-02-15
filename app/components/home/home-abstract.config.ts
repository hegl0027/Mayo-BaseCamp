import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home-component';

import {HomeOneComponent} from './one/home-one.component';
import {HomeTwoComponent} from './two/home-two.component';
import {HomeThreeComponent} from './three/home-three.component';
import {HomeFourComponent} from './four/home-four.component';
import {HomeFiveComponent} from './five/home-five.component';


const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'one', component: HomeOneComponent },
      { path: 'two', component: HomeTwoComponent },
      { path: 'three', component: HomeThreeComponent },
      { path: 'four', component: HomeFourComponent },
      { path: 'five', component: HomeFiveComponent },
      { path: '', redirectTo: 'one', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent
  ]
})
export class HomeModule {}

