(function (angular, $) {
    'use strict';

    var stateConfig = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/home/one');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                template: '<div ui-view></div>',
                controller: 'indexController'
            })

            .state('app.patterns', {
                url: '/patterns',
                templateUrl: 'views/patterns/patterns.html',
                controller: 'patternsController'
            })

            .state('app.support', {
                url: '/support',
                templateUrl: 'views/support/support.html',
                controller: 'supportController'
            })

            .state('app.voiceandtone', {
                url: '/voiceandtone',
                templateUrl: 'views/voiceandtone/voiceandtone.html',
                controller: 'voiceAndToneController'
            })

            .state('app.styleguide', {
                url: '/styleguide',
                templateUrl: 'views/styleguide/styleguide.html',
                controller: 'styleGuideController'
            })

            .state('app.home', {
                abstract: true,
                url: '/home',
                templateUrl: 'views/home/home.context.html',
                controller: 'homeContextController'
            })
            .state('app.home.one', {
                url: '/one',
                templateUrl: 'views/home/home.one.html',
                controller: 'homeOneController'
            })
            .state('app.home.two', {
                url: '/two',
                templateUrl: 'views/home/home.two.html'
            })
            .state('app.home.three', {
                url: '/three',
                templateUrl: 'views/home/home.three.html'
            })
            .state('app.home.four', {
                url: '/four',
                templateUrl: 'views/home/home.four.html'
            })
            .state('app.home.five', {
                url: '/five',
                templateUrl: 'views/home/home.five.html'
            })

            /* REPORTING ROUTING*/
            .state('app.reporting', {
                abstract: true,
                url: '/reporting',
                template: '<div ui-view class="partial__wrapper"></div>'
            })
            .state('app.reporting.one', {
                url: '/one',
                templateUrl: 'views/reporting/reporting.one.html'
            })
            .state('app.reporting.two', {
                url: '/two',
                templateUrl: 'views/reporting/reporting.two.html'
            })
            .state('app.reporting.three', {
                url: '/three',
                templateUrl: 'views/reporting/reporting.three.html'
            })

            /* ADMIN ROUTING*/
            .state('app.admin', {
                abstract: true,
                url: '/admin',
                template: '<div ui-view class="partial__wrapper"></div>'
            })
            .state('app.admin.one', {
                url: '/one',
                templateUrl: 'views/sysadmin/sysadmin.one.html'
            })
            .state('app.admin.two', {
                url: '/two',
                templateUrl: 'views/sysadmin/sysadmin.two.html'
            })
            .state('app.admin.three', {
                url: '/three',
                templateUrl: 'views/sysadmin/sysadmin.three.html'
            });
    };

    var runConfig = function ($rootScope) {
        $('.nav').first().addClass('selected');

        var stateChangeSuccess = function (event, toState, toParams, fromState, fromParams) {
            $('.content__wrapper').find('[ui-sref="' + toState.name + '"]').addClass('selected');
            $('.content__wrapper').find('[ui-sref="' + fromState.name + '"]').removeClass('selected');
        };

        // todo: write this as a directive
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    };

    /**
     * Application entry module
     */
    angular.module('app', [
            'ui.router',
            'ngAnimate'
        ])
        .config(stateConfig)
        .run(runConfig);

})(angular, jQuery);
