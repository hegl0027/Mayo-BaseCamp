'use strict';

/**
 * @ngdoc service
 * @service api
 * @description
 *
 * The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 */
export default function ApiService($http, $q, $resource) {
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
