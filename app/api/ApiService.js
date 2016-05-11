(function (angular) {
    'use strict';

    var apiService = function ($http, $q, $timeout, $log, $resource) {

        return {
            User: $resource('/resources/users/:userId', {
                userId: '@id'
            })
        };
    };

    angular.module('app').service('apiService', apiService);
})(angular);