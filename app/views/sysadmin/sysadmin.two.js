'use strict';

import angular from 'angular';

function AdminTwoController() {

}

var adminTwoStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin.two', {
            url: '/two',
            controller: AdminTwoController,
            controllerAs: 'adminTwo',
            templateProvider: function ($templateCache) {
                return $templateCache.get('sysadmin/sysadmin.two.html');
            }
        });
};

export default angular.module('app.admin.two', [])
    .config(adminTwoStateConfig);
