'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('admin one controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var adminTwoController = $controller('adminTwoController', { $scope: $scope });
            expect(adminTwoController).toBeDefined();
        }));

    });
});
