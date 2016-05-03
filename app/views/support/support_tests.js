'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('support controller', function () {

        it('should be defined', inject(function ($controller) {
            //spec body
            var supportController = $controller('supportController');
            expect(supportController).toBeDefined();
        }));

    });
});
