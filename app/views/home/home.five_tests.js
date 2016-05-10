'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home five controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeFiveController = $controller('homeFiveController', {
                $scope: $scope
            });
            expect(homeFiveController).toBeDefined();
        }));

    });
});
