'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('voice and tone controller', function () {

        it('should be defined', inject(function ($controller) {
            //spec body
            var voiceAndToneController = $controller('voiceAndToneController');
            expect(voiceAndToneController).toBeDefined();
        }));

    });
});
