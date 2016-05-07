'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('patterns controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var patternsController = $controller('patternsController', {$scope: $scope});
            expect(patternsController).toBeDefined();
        }));

    });
});
