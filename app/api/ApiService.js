(function (angular) {
    'use strict';

    var apiService = function ($http, $q, $timeout, $log, $resource) {

        return {
            User: $resource('/resources/users/:id', {
                id: '@id'
            }, {
                update: {
                    method: 'PUT'
                }
            })
        };
    };

    angular.module('app').service('apiService', apiService);
})(angular);