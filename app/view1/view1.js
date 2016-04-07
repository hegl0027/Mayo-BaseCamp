'use strict';
/**
 * @ngdoc module
 * @name app.view1
 */
angular.module('app.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function () {
    // hello there
});