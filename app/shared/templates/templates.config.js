import angular from 'angular';
import wrapper from './templates';

export default angular.module('app.shared.templates', [])
  .service('templates', ['$templateCache', '$log', wrapper]);