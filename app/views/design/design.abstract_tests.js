'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Abstract Design controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var abstractDesignController = $controller('abstractDesignController', {
                $scope: $scope
            });
            expect(abstractDesignController).toBeDefined();
        }));

    });
});
