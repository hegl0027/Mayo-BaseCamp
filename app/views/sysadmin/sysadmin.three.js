'use strict';

import angular from 'angular';

function AdminThreeController() {

}

var adminThreeStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.three', {
            url: '/three',
            controller: AdminThreeController,
            controllerAs: 'adminThree',
            templateProvider: function ($templateCache) {
                return $templateCache.get('sysadmin/sysadmin.three.html');
            }
        });
};

export default angular.module('app.admin.three', [])
    .config(adminThreeStateConfig);
