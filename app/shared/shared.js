import angular from 'angular';
import api from './api/api-service.config';
import templateCache from './template-cache/template-cache.config';
import navSelect from './nav-select/nav-select.config';

export default angular.module('app.shared', [
  api.name,
  templateCache.name,
  navSelect.name
]);
