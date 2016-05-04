'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('home context controller', function () {

        it('should be defined', inject(function ($controller) {
            
            var homeContextController = $controller('homeContextController');
            expect(homeContextController).toBeDefined();
        }));

    });
});
