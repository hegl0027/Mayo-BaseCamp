'use strict';

import angular from 'angular';
import AdminThreeController from './sysadmin-three-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.three', {
            url: '/three',
            controller: AdminThreeController,
            controllerAs: 'adminThree',
            templateProvider: ($templateCache) => $templateCache.get('sysadmin/three/sysadmin-three.html')
        });
};

export default angular.module('app.admin.three', [])
    .config(['$stateProvider', stateConfig]);
