(function (angular, $) {
    'use strict';

    var indexController = function ($scope, $interval, $state, $log, apiService) {
        var now = moment();
        $scope.myState = $state;

        apiService.User.get({ userId: 1 }).$promise.then(function (user) {
            $log.log('MOCKED:');
            $log.log(user);
            $scope.user = user;
        });

        $(document).on('click', '.nav', function () {
            $(this).siblings('.selected').removeClass('selected');
            $(this).addClass('selected');
        });
        
        $scope.doesStateInclude = function (stateName) {
            return $state.includes(stateName);
        };

        var updateLastSaved = (function fn() {
            $scope.lastSaved = moment(now).fromNow();
            return fn;
        })();

        $interval(updateLastSaved, 10000);
    };

    angular.module('app').controller('indexController', indexController);

})(angular, jQuery);
