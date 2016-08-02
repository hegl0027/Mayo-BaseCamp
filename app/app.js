import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import loadingbar from 'angular-loading-bar';
import messages from 'angular-messages';
import sanitize from 'angular-sanitize';
import aria from 'angular-aria';
import support from './components/support/support-config';
import home from './components/home/home-abstract-config';
import reporting from './components/reporting/reporting-abstract-config';
import admin from './components/sysadmin/sysadmin-abstract-config';
import templates from './components/templates';
import index from './index-config';
import api from './shared/api/api-service-config';

var stateConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/home/one');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            template: '<div ui-view></div>'
        });
};

var loadingBarConfig = (cfpLoadingBarProvider) => {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.latencyThreshold = 20;
};

/**
 * @ngdoc module
 * @name app
 * @module app
 * @packageName root-app
 * @requires ui-router
 * @requires ngMessages
 * @requires ngSanitize
 * @requires ngAria
 * @requires angular-loading-bar
 * @requires ngAnimate
 * @requires templates
 * @requires app-index
 * @requires api
 *
 * @description
 *
 * The 'app' is an angular module which bootstraps the root project.
 */
export default angular.module('app', [
    uirouter,
    messages,
    sanitize,
    aria,
    loadingbar,
    animate,
    index.name,
    api.name,
    templates.name,
    support.name,
    home.name,
    admin.name,
    reporting.name
])
    .config(['$stateProvider', '$urlRouterProvider', stateConfig])
    .config(['cfpLoadingBarProvider', loadingBarConfig]);
