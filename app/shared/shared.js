import angular from 'angular';
import api from './api/api-service.config';
import templates from './templates/templates.config';

export default angular.module('app.shared', [
  api.name,
  templates.name
]);
