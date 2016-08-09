import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import loadingbar from 'angular-loading-bar';
import messages from 'angular-messages';
import sanitize from 'angular-sanitize';
import aria from 'angular-aria';
import index from './index-config';
import IndexController from './index-controller';
import components from './components/components';
import shared from './shared/shared';
import templates from './components/templates';

var stateConfig = ($stateProvider, $urlRouterProvider) => {
    console.log('app state config');
    $urlRouterProvider.otherwise('/app/home/one');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            views: {
                '@': {
                    templateProvider: ($templateCache) => $templateCache.get('wrapper/wrapper.html'),
                    controller: IndexController,
                    controllerAs: 'idx'
                },
                'header@app': {
                    templateProvider: ($templateCache) => $templateCache.get('header/header.html')
                },
                'footer@app': {
                    templateProvider: ($templateCache) => $templateCache.get('footer/footer.html')
                },
                'nav@app': {
                    templateProvider: ($templateCache) => $templateCache.get('nav/nav.html')
                }
            }
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
    shared.name,
    templates.name
])
    .config(['$stateProvider', '$urlRouterProvider', stateConfig])
    .config(['cfpLoadingBarProvider', loadingBarConfig]);
