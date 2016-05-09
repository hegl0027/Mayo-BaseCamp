'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('support controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var supportController = $controller('supportController', { $scope: $scope });
            expect(supportController).toBeDefined();
        }));

    });
});
