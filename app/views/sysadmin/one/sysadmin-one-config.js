'use strict';

import angular from 'angular';
import AdminOneController from './sysadmin-one-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.one', {
            url: '/one',
            controller: AdminOneController,
            controllerAs: 'adminOne',
            templateProvider: ($templateCache) => $templateCache.get('sysadmin/one/sysadmin-one.html')
        });
};

export default angular.module('app.admin.one', [])
    .config(['$stateProvider', stateConfig]);

