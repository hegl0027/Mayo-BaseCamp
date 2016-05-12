'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('components controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var componentsController = $controller('componentsController', { $scope: $scope });
            expect(componentsController).toBeDefined();
        }));

    });
});
