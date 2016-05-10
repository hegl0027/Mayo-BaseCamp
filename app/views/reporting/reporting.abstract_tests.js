'use strict';

describe('app module', function () {

    beforeEach(module('app'));

    describe('abstract reporting controller', function () {

        it('should be defined', inject(function ($controller) {
            var $scope = {};
            var abstractReportingController = $controller('abstractReportingController', { $scope: $scope });
            expect(abstractReportingController).toBeDefined();
        }));

    });
});
