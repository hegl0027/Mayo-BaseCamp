(function (angular) {
    "use strict";

    angular.module('appResourceMocks', ['app', 'ngMockE2E'])
        .run(function ($httpBackend) {
            var user = {
                firstName: 'Stan',
                lastName: 'Lee'
            };

            $httpBackend.whenGET('/resources/users/1').respond(user);

            // Requests for partials are handled by the real server
            $httpBackend.whenGET(/views\/.*/).passThrough();

        });
})(angular);
