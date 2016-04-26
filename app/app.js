'use strict';

/**
 * Application entry module
 * todo: strip out angular routing
 */
angular.module('app', [
    'ngRoute',
    'app.view1',
    'app.view2',
    'app.version'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);