'use strict';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import loadingbar from 'angular-loading-bar';
import messages from 'angular-messages';
import sanitize from 'angular-sanitize';
import aria from 'angular-aria';
import support from './views/support/support';
import voiceandtone from './views/voiceandtone/voiceandtone';
import architecture from './views/architecture/architecture.config';
import design from './views/design/design.abstract';
import home from './views/home/home.abstract';
import reporting from './views/reporting/reporting.abstract';
import admin from './views/sysadmin/sysadmin.abstract';
import templates from './templates';
import index from './index';
import api from './api/api.service.config';
import httpMock from './api/api.service.mocks';

var stateConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/app/home/one');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            template: '<div ui-view></div>'
        })

        .state('app.fonz', {
            url: '/fonz',
            data: {
                title: 'The Fonz',
                hasSecondaryNav: false
            },
            templateProvider: function ($templateCache) {
                return $templateCache.get('fonz/fonz.html');
            }
        });
};

var loadingBarConfig = function (cfpLoadingBarProvider) {
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
    voiceandtone.name,
    architecture.name,
    support.name,
    home.name,
    admin.name,
    design.name,
    reporting.name,
    httpMock.name
])
    .config(stateConfig)
    .config(loadingBarConfig);
