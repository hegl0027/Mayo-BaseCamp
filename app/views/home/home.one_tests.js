'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home one controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeOneController = $controller('homeOneController', {$scope: $scope});
            expect(homeOneController).toBeDefined();
        }));

    });
});
