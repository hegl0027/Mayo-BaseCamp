(function (angular, $) {
    'use strict';

    var indexController = function ($scope, $interval, $state, $log) {
        var now = moment();

        $(document).on('click', '.nav', function () {
            $(this).siblings('.selected').removeClass('selected');
            $(this).addClass('selected');
        });
        
        $scope.doesStateInclude = function (shortState) {
            if ($state.includes(shortState))
                $log.log(shortState + ' :: ' + $state.$current.name);
            return $state.includes(shortState);
        };

        var updateLastSaved = (function fn() {
            $scope.lastSaved = moment(now).fromNow();
            return fn;
        })();

        $interval(updateLastSaved, 10000);
    };

    angular.module('app').controller('indexController', indexController);

})(angular, jQuery);
