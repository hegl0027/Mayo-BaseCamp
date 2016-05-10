'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home three controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeThreeController = $controller('homeThreeController', {
                $scope: $scope
            });
            expect(homeThreeController).toBeDefined();
        }));

    });
});
