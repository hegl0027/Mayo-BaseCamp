import angular from 'angular';
import navSelect from './nav-select';

export default angular.module('navSelected', [])
  .directive('navSelect', navSelect);
