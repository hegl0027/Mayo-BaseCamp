'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('overview controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var overviewController = $controller('overviewController', { $scope: $scope });
            expect(overviewController).toBeDefined();
        }));

    });
});
