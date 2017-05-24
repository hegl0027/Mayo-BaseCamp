//import {defaultConfiguration as useDefaultLoggingConfiguration} from 'mayo-js-logging';
//import {decorateStateChange, decorateHttpService, decorateExceptionHandler} from 'mayo-js-logging/lib/angular';
//

//decorateHttpService(BasecampModule);
//decorateStateChange(BasecampModule);
//decorateExceptionHandler(BasecampModule);
//useDefaultLoggingConfiguration();


import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {_insertCss} from '../assets/sass/app.scss';
_insertCss();

import { FooterComponent } from './components/footer/footer.component';

import { PrimaryNavComponent } from './components/nav/nav.component';
import { MainHeaderComponent } from './components/header/header.component';
import {USER_SERVICE, UserService} from './shared/user/UserService';
import {MockUserService} from './shared/user/MockUserService';

import {HomeModule} from './components/home/home-abstract.config';
import {ReportingModule} from './components/reporting/reporting-abstract.config';
import {AdminModule} from './components/sysadmin/sysadmin-abstract.config';
import {SupportModule} from './components/support/support.config';

import BaseTemplate from './components/base/base.html';

@Component({
  template: BaseTemplate
})
export class AppComponent {
}

const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent,
    children: [
      {path: 'home', loadChildren: () => HomeModule},
      {path: 'reporting', loadChildren: () => ReportingModule},
      {path: 'admin', loadChildren: () => AdminModule},
      {path: 'support', loadChildren: () => SupportModule},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }, {
    path: '', redirectTo: 'app', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  declarations: [
    AppComponent,
    PrimaryNavComponent,
    FooterComponent,
    MainHeaderComponent
  ],
  providers: [
    {provide: USER_SERVICE, useValue: new MockUserService()}
  ]
})
export class BaseModule{ };
