'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('Style Guide controller', function () {

        it('should be defined', inject(function ($controller) {
            //spec body
            var styleGuideController = $controller('styleGuideController');
            expect(styleGuideController).toBeDefined();
        }));

    });
});
