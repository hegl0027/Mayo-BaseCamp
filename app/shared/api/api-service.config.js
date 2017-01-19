'use strict';

import angular from 'angular';
import resource from 'angular-resource';
import apiService from './api-service';

/**
 * @module app.shared.api
 * @description - The 'api' is an angular service that facilitates mapping RESTful endpoints via ngResource
 * @requires ngResource
 */
export default angular.module('app.shared.api', [
  resource
])
  .service('apiService', ['$http', '$q', '$resource', apiService]);