import angular from 'angular';
import api from './api/api-service.config';
import getTemplate from './get-template/get-template.config';

export default angular.module('app.shared', [
  api.name,
  getTemplate.name
]);
