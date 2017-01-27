//import angular from 'angular';
//import uirouter from 'angular-ui-router';
//import animate from 'angular-animate';
//import loadingbar from 'angular-loading-bar';
//import messages from 'angular-messages';
//import sanitize from 'angular-sanitize';
//import aria from 'angular-aria';
//import BaseController from './components/base/base.controller';
//import HeaderController from './components/header/header.controller';
//import FooterController from './components/footer/footer.controller';
//import NavController from './components/nav/nav.controller';
//import shared from './shared/shared';
//
//import reportingState from './components/reporting/reporting-abstract.config';
//import adminState from './components/sysadmin/sysadmin-abstract.config';
//import patternsState from './components/patterns/patterns.config';
//
//import homeState from './components/home/home-abstract.config';
//import supportState from './components/support/support.config';
//
//import 'angular-ui-router.statehelper';
//
import BaseTemplate from './components/base/base.html';
//import HeaderTemplate from './components/header/header.html';
//import NavTemplate from './components/nav/nav.html';
//import FooterTemplate from './components/footer/footer.html';
//
//
//import {defaultConfiguration as useDefaultLoggingConfiguration} from 'mayo-js-logging';
//import {decorateStateChange, decorateHttpService, decorateExceptionHandler} from 'mayo-js-logging/lib/angular';
//
//var stateConfig = (stateHelperProvider, $urlRouterProvider) => {
//  $urlRouterProvider.otherwise('/app/home/one');
//
//  stateHelperProvider
//    .state({
//      name: 'app',
//      abstract: true,
//      url: '/app',
//      views: {
//        '@': {
//          template: BaseTemplate,
//          controller: BaseController,
//          controllerAs: 'base'
//        },
//        'header@app': {
//          template: HeaderTemplate,
//          controller: HeaderController,
//          controllerAs: 'header'
//        },
//        'footer@app': {
//          template: FooterTemplate,
//          controller: FooterController,
//          controllerAs: 'footer'
//        },
//        'nav@app': {
//          template: NavTemplate,
//          controller: NavController,
//          controllerAs: 'navCtrl'
//        }
//      },
//      children: [
//        homeState,
//        supportState,
//        patternsState,
//        reportingState,
//        adminState
//      ]
//    });
//};
//
//var loadingBarConfig = (cfpLoadingBarProvider) => {
//  cfpLoadingBarProvider.includeSpinner = false;
//  cfpLoadingBarProvider.latencyThreshold = 20;
//};
//
///**
// * @name app
// * @module app
// * @packageName root-app
// * @requires ui-router
// * @requires ngMessages
// * @requires ngSanitize
// * @requires ngAria
// * @requires angular-loading-bar
// * @requires ngAnimate
// * @requires shared
// *
// * @description
// *
// * The 'app' is an angular module that bootstraps the basecamp project.
// */
//const BasecampModule = angular.module('app', [
//  uirouter,
//  messages,
//  sanitize,
//  aria,
//  loadingbar,
//  animate,
//  shared.name,
//  'ui.router.stateHelper',
//])
//  .config(['stateHelperProvider', '$urlRouterProvider', stateConfig])
//  .config(['cfpLoadingBarProvider', loadingBarConfig]);
//
//
//decorateHttpService(BasecampModule);
//decorateStateChange(BasecampModule);
//decorateExceptionHandler(BasecampModule);
//useDefaultLoggingConfiguration();
//
//export default BasecampModule;
//
//


///
import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//import styles from '../assets/sass/app.scss';
import {_insertCss} from '../assets/sass/app.scss';
_insertCss();

import { PrimaryNavComponent } from './components/nav/nav.component';
import { MainHeaderComponent } from './components/header/header.component';

import homeState from './components/home/home-abstract.config';
import {HomeComponent} from './components/home/home-abstract.config';
import {CommonModule} from '@angular/common';

@Component({
  template: BaseTemplate
})
export class AppComponent {
}

const appRoutes: Routes = [
  {
    path: 'app', component: AppComponent,
    children: [
      homeState,
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ],
  }, {
    path: '', redirectTo: '/app/home', pathMatch: 'full'
  }
  //, { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  declarations: [
    HomeComponent,
    AppComponent,
    PrimaryNavComponent,
    MainHeaderComponent
  ]
})
export class BaseModule{ };
