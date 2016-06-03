'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('voice and tone controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var voiceAndToneController = $controller('voiceAndToneController', { $scope: $scope });
            expect(voiceAndToneController).toBeDefined();
        }));

    });
});
