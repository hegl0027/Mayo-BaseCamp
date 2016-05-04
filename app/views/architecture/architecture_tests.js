'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('architecture controller', function () {

        it('should be defined', inject(function ($controller) {
            //spec body
            var architectureController = $controller('architectureController');
            expect(architectureController).toBeDefined();
        }));

    });
});
