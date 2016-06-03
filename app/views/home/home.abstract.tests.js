'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('abstract home controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var abstractHomeController = $controller('abstractHomeController', {
                $scope: $scope
            });
            expect(abstractHomeController).toBeDefined();
        }));

    });
});
