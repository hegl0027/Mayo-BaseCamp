'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home four controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeFourController = $controller('homeFourController', {
                $scope: $scope
            });
            expect(homeFourController).toBeDefined();
        }));

    });
});
