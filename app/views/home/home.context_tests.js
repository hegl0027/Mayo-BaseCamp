'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('home context controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var homeContextController = $controller('homeContextController', {
                $scope: $scope
            });
            expect(homeContextController).toBeDefined();
        }));

    });
});
