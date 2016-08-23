import angular from 'angular';
import wrapper from './template-cache';

export default angular.module('templateCache', [])
  .service('templateCache', ['$templateCache', wrapper]);