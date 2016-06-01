'use strict';

import angular from 'angular';

function AdminOneController() {

}

var adminOneStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.one', {
            url: '/one',
            controller: AdminOneController,
            controllerAs: 'adminOne',
            templateProvider: function ($templateCache) {
                return $templateCache.get('sysadmin/sysadmin.one.html');
            }
        });
};

export default angular.module('app.admin.one', [])
    .config(adminOneStateConfig);

