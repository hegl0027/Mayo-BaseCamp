import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import loadingbar from 'angular-loading-bar';
import messages from 'angular-messages';
import sanitize from 'angular-sanitize';
import aria from 'angular-aria';
import index from './index-config';
import components from './components/components';
import shared from './shared/shared';

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
 * @requires app-index
 * @requires shared
 * @requires components
 *
 * @description
 *
 * The 'app' is an angular module which bootstraps the basecamp project.
 */
export default angular.module('app', [
    uirouter,
    messages,
    sanitize,
    aria,
    loadingbar,
    animate,
    index.name,
    components.name,
    shared.name
])
    .config(['$stateProvider', '$urlRouterProvider', stateConfig])
    .config(['cfpLoadingBarProvider', loadingBarConfig]);
