(function (angular, $) {
    'use strict';

    var indexController = function ($scope, $interval, $state, $log, apiService, $timeout) {
        var now = moment();
        $scope.myState = $state;
        $scope.appVersion = 'v0.8.0';

        apiService.User.get({id: 1}).$promise.then(function (user) {
            $log.log('MOCKED GET:');
            $log.log(user);
            $scope.user = user;
        });

        apiService.User.update({id: 1}, $scope.user).$promise.then(function (res) {
            $log.log('MOCKED PUT:');
            $log.log(res);
        });

        apiService.User.save($scope.user).$promise.then(function (res) {
            $log.log('MOCKED POST:');
            $log.log(res);
        });

        apiService.User.remove($scope.user).$promise.then(function (res) {
            $log.log('MOCKED DELETE:');
            $log.log(res);
        });

        $(document).on('click', '.nav', function () {
            $(this).siblings('.selected').removeClass('selected');
            $(this).addClass('selected');
        });

        $scope.doesStateInclude = function (stateName) {
            return $state.includes(stateName);
        };

        $scope.hasSecondaryNav = function () {
            return $state.current.data ? $state.current.data.hasSecondaryNav === true : false;
        };

        var updateLastSaved = (function fn() {
            $scope.lastSaved = moment(now).fromNow();
            return fn;
        })();

        $interval(updateLastSaved, 10000);
    };

    angular.module('app').controller('indexController', indexController);

})(angular, jQuery);
