'use strict';

/**
 * @description The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource.
 * @param $http
 * @param $q
 * @param $resource
 *
 * @returns {{User: *}} Object literal representing the associated REST endpoint entities.
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
