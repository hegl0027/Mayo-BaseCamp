import angular from 'angular';
import wrapper from './template-cache';

export default angular.module('template-cache', [])
  .service('templateCache', ['$templateCache', wrapper]);