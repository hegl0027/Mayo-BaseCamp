'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home two controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeTwoController = $controller('homeTwoController', {
                $scope: $scope
            });
            expect(homeTwoController).toBeDefined();
        }));

    });
});
