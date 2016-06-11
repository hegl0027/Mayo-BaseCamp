'use strict';

import angular from 'angular';
import adminOne from './one/sysadmin-one-config';
import adminTwo from './two/sysadmin-two-config';
import adminThree from './three/sysadmin-three-config';
import AdminAbstractController from './sysadmin-abstract-controller';

var abstractAdminStateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.admin', {
            abstract: true,
            url: '/admin',
            template: '<div ui-view class="partial__wrapper"></div>',
            controller: AdminAbstractController,
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
