'use strict';

import angular from 'angular';
import resource from 'angular-resource';

/**
 * @ngdoc service
 * @service api
 * @description
 *
 * The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 */
function ApiService($http, $q, $timeout, $log, $resource) {
    return {
        User: $resource('/resources/users/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        })
    };
}

/**
 * @ngdoc service
 * @name api
 * @module api
 * @packageName root-app
 * @requires ngResource
 * @description
 *
 * The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 */
export default angular.module('api', [resource])
    .service('apiService', ApiService);