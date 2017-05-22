import {Component} from '@angular/core';

import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { BaseModule} from './app';


import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
]

@Component({
  selector: 'basecamp-app',
  template: `
  <router-outlet></router-outlet>
  `
})
class BasecampWrapper { }

@NgModule({
  imports: [
    BrowserModule,
    BaseModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [
    BasecampWrapper
  ],
  bootstrap: [BasecampWrapper]
})
export default class AppModule{ };

