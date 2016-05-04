'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home one controller', function () {

        it('should be defined', inject(function ($controller) {
            
            var homeOneController = $controller('homeOneController');
            expect(homeOneController).toBeDefined();
        }));

    });
});
