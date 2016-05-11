(function (angular) {
    'use strict';

    angular.module('appResourceMocks', ['app', 'ngMockE2E'])
        .run(function ($httpBackend) {
            var user = {
                _id: 1,
                firstName: 'Stan',
                lastName: 'Lee'
            };

            $httpBackend.whenGET(/resources\/users\/.*/).respond(user);
            $httpBackend.whenPUT(/resources\/users\/.*/).respond(user);

            // Requests for partials are handled by the real server
            $httpBackend.whenGET(/views\/.*/).passThrough();

        });
})(angular);
