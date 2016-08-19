import angular from 'angular';
import wrapper from './get-template';

export default angular.module('get-template', [])
  .service('getTemplate', ['$templateCache', '$log', wrapper]);