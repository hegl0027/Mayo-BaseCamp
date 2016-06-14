'use strict';

import angular from 'angular';
import resource from 'angular-resource';
import apiService from './api-service';
import httpMock from './api-service.mock';

/**
 * @ngdoc module
 * @module api
 * @requires ngResource
 * @description
 *
 * The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 */
export default angular.module('api', [
    resource,
    httpMock.name
])
    .service('apiService', apiService);