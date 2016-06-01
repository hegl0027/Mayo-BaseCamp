'use strict';

import angular from 'angular';
import moment from 'moment';
import jQuery from 'jquery';

function IndexController($interval, $state, $log, apiService) {
    var now = moment();
    this.myState = $state;
    this.lastSaved = now.fromNow();
    this.appVersion = 'v0.10';

    apiService.User.get({ id: 1 }).$promise.then(user => {
        $log.log('MOCKED GET:');
        $log.log(user);
        this.user = user;
    });

    apiService.User.update({ id: 1 }, this.user).$promise.then(res => {
        $log.log('MOCKED PUT:');
        $log.log(res);
    });

    apiService.User.save(this.user).$promise.then(res => {
        $log.log('MOCKED POST:');
        $log.log(res);
    });

    apiService.User.remove(this.user).$promise.then(res => {
        $log.log('MOCKED DELETE:');
        $log.log(res);
    });

    apiService.User.query(this.user).$promise.then(res => {
        $log.log('MOCKED QUERY:');
        $log.log(res);
    });

    jQuery(document).on('click', '.nav', () => {
        jQuery(this).siblings('.selected').removeClass('selected');
        jQuery(this).addClass('selected');
    });

    this.doesStateInclude = (stateName) => $state.includes(stateName);

    this.hasSecondaryNav = () => $state.current.data ? $state.current.data.hasSecondaryNav === true : false;

    this.openSettings = () => {
        /*this.settingsDialog = ngDialog.open({
            template: 'views/global/settings.html',
            className: 'ngdialog-theme-default'
        });*/
    };

    this.openLogout = () => {
        /*this.logoutDialog = ngDialog.open({
            template: 'views/global/logout.html',
            className: 'ngdialog-theme-default'
        });*/
    };

    var updateLastSaved = () => {
        this.lastSaved = moment(now).fromNow();
    };

    $interval(updateLastSaved, 10000);
}

export default angular.module('app-index', [])
    .controller('indexController', IndexController);
