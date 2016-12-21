import angular from 'angular';
import api from './api/api-service.config';

export default angular.module('app.shared', [
  api.name,
]);
