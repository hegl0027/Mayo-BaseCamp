'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('foundations controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var foundationsController = $controller('foundationsController', { $scope: $scope });
            expect(foundationsController).toBeDefined();
        }));

    });
});
