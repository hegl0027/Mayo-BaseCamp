'use strict';

import angular from 'angular';
import resource from 'angular-resource';
import apiService from './api.service';

/**
 * @ngdoc module
 * @name api
 * @module api
 * @packageName root-app
 * @requires ngResource
 * @description
 *
 * The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 */
export default angular.module('api', [resource])
    .service('apiService', apiService);