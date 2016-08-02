import angular from 'angular';
import home from './home/home-abstract-config';
import reporting from './reporting/reporting-abstract-config';
import support from './support/support-config';
import sysadmin from './sysadmin/sysadmin-abstract-config';
import templates from './templates';

export default angular.module('app.components', [
    home.name,
    reporting.name,
    support.name,
    sysadmin.name,
    templates.name
]);
