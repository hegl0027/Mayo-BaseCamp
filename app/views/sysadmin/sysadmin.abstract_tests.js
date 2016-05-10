'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('abstract admin controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var abstractAdminController = $controller('abstractAdminController', { $scope: $scope });
            expect(abstractAdminController).toBeDefined();
        }));

    });
});
