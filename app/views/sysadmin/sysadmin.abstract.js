'use strict';

import angular from 'angular';
import adminOne from './sysadmin.one';
import adminTwo from './sysadmin.two';
import adminThree from './sysadmin.three';

function AbstractAdminController() {

}

var abstractAdminStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin', {
            abstract: true,
            url: '/admin',
            template: '<div ui-view class="partial__wrapper"></div>',
            controller: AbstractAdminController,
            controllerAs: 'abstractAdmin',
            data: {
                title: 'Admin',
                hasSecondaryNav: true
            }
        });
};

export default angular.module('app.admin', [
    adminOne.name,
    adminTwo.name,
    adminThree.name
])
    .config(abstractAdminStateConfig);
