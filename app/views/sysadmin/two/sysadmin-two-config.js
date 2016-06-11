'use strict';

import angular from 'angular';
import AdminTwoController from './sysadmin-two-controller';

var adminTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.two', {
            url: '/two',
            controller: AdminTwoController,
            controllerAs: 'adminTwo',
            templateProvider: ($templateCache) => $templateCache.get('sysadmin/sysadmin.two.html')
        });
};

export default angular.module('app.admin.two', [])
    .config(adminTwoStateConfig);
