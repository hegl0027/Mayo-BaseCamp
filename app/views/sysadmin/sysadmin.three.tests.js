'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('admin one controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var adminThreeController = $controller('adminThreeController', { $scope: $scope });
            expect(adminThreeController).toBeDefined();
        }));

    });
});
