import angular from 'angular';
import api from './api/api-service.config';
import templateCache from './templates/template-cache.config';

export default angular.module('app.shared', [
  api.name,
  templateCache.name
]);
