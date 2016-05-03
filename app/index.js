(function (angular, $) {
    'use strict';

    var indexController = function ($scope, $interval) {
        $scope.smiley = ':)';
        $scope.primaryNav = 'HOME';
        var now = moment();

        $(document).on('click', '.nav', function () {
            $(this).siblings('.selected').removeClass('selected');
            $(this).addClass('selected');
        });

        $scope.updatePrimaryView = function (newView) {
            $scope.primaryNav = newView;
        };

        var updateLastSaved = (function fn() {
            $scope.lastSaved = moment(now).fromNow();
            return fn;
        })();

        $interval(updateLastSaved, 10000);
    };

    angular.module('app').controller('indexController', indexController);

})(angular, jQuery);
