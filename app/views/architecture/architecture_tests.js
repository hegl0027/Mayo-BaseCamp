'use strict';

describe('app.architecture module', function () {

    beforeEach(module('app'));

    describe('architecture controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var architectureController = $controller('architectureController', { $scope: $scope });
            expect(architectureController).toBeDefined();
        }));

    });
});
