'use strict';

import angular from 'angular';
import 'angular-mocks';

function mockHttp($httpBackend) {
    const user = {
        _id: 1,
        firstName: 'Stan',
        lastName: 'Lee'
    };

    $httpBackend.whenGET(/resources\/users\/.*/).respond(user);
    $httpBackend.whenGET(/resources\/users*/).respond([user]);
    $httpBackend.whenPUT(/resources\/users\/.*/).respond(user);
    $httpBackend.whenPOST(/resources\/users*/).respond(user);
    $httpBackend.whenDELETE(/resources\/users*/).respond();

    // Requests for partials are handled by the real server
    $httpBackend.whenGET(/views\/.*/).passThrough();
}

/**
 * @ngdoc module
 * @module app-mocks-http
 * @requires ngMockE2E
 * @description
 *
 * The 'app-mocks-http' is an angular module which contains mocks suitable for end-to-end testing
 * the root app.  It utilizes the $httpBackend service to mock all interactions with the server
 * with the exception of view requests.
 */
export default angular.module('app-mocks-http', [
    'ngMockE2E'
])
    .run(['$httpBackend', mockHttp]);
