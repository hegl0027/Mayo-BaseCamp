
/**
 * @module app.shared.api
 * @description - The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource.
 * @param {Object} $http - Angular's built-in $http service
 * @param {Object} $q - Angular's built-in $q service
 * @param {Object} $resource - Angular's optional $resource service
 *
 * @returns {{User: *}} - Object literal representing the associated REST endpoint entities and actions available.
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
