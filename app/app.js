import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import loadingbar from 'angular-loading-bar';
import messages from 'angular-messages';
import sanitize from 'angular-sanitize';
import aria from 'angular-aria';
import BaseController from './components/base/base.controller';
import HeaderController from './components/header/header.controller';
import FooterController from './components/footer/footer.controller';
import NavController from './components/nav/nav.controller';
import components from './components/components';
import shared from './shared/shared';

var stateConfig = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/app/home/one');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      views: {
        '@': {
          templateProvider: (templateCache) => templateCache.get('base/base.html'),
          controller: BaseController,
          controllerAs: 'base'
        },
        'header@app': {
          templateProvider: (templateCache) => templateCache.get('header/header.html'),
          controller: HeaderController,
          controllerAs: 'header'
        },
        'footer@app': {
          templateProvider: (templateCache) => templateCache.get('footer/footer.html'),
          controller: FooterController,
          controllerAs: 'footer'
        },
        'nav@app': {
          templateProvider: (templateCache) => templateCache.get('nav/nav.html'),
          controller: NavController,
          controllerAs: 'nav'
        }
      }
    });
};

var loadingBarConfig = (cfpLoadingBarProvider) => {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 20;
};

/**
 * @name app
 * @module app
 * @packageName root-app
 * @requires ui-router
 * @requires ngMessages
 * @requires ngSanitize
 * @requires ngAria
 * @requires angular-loading-bar
 * @requires ngAnimate
 * @requires shared
 * @requires components
 *
 * @description
 *
 * The 'app' is an angular module that bootstraps the basecamp project.
 */
export default angular.module('app', [
  uirouter,
  messages,
  sanitize,
  aria,
  loadingbar,
  animate,
  components.name,
  shared.name
])
  .config(['$stateProvider', '$urlRouterProvider', stateConfig])
  .config(['cfpLoadingBarProvider', loadingBarConfig]);
