'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('admin one controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var adminOneController = $controller('adminOneController', { $scope: $scope });
            expect(adminOneController).toBeDefined();
        }));

    });
});
