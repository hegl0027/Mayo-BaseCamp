'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    var $controller;

    describe('onboarding controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var onboardingController = $controller('onboardingController', { $scope: $scope });
            expect(onboardingController).toBeDefined();
        }));

    });
});
