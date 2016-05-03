'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('patterns controller', function () {

        it('should be defined', inject(function ($controller) {
            //spec body
            var patternsController = $controller('patternsController');
            expect(patternsController).toBeDefined();
        }));

    });
});
