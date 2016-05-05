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
                controller: 'patternsController',
                data: {
                    title: 'Patterns'
                }
            })

            .state('app.support', {
                url: '/support',
                templateUrl: 'views/support/support.html',
                controller: 'supportController',
                data: {
                    title: 'Support'
                }
            })

            .state('app.voiceandtone', {
                url: '/voiceandtone',
                templateUrl: 'views/voiceandtone/voiceandtone.html',
                controller: 'voiceAndToneController',
                data: {
                    title: 'Voice and Tone'
                }
            })

            .state('app.styleguide', {
                url: '/styleguide',
                templateUrl: 'views/styleguide/styleguide.html',
                controller: 'styleGuideController',
                data: {
                    title: 'Style Guide'
                }
            })

            .state('app.architecture', {
                url: '/architecture',
                templateUrl: 'views/architecture/architecture.html',
                controller: 'architectureController',
                data: {
                    title: 'Architecture'
                }
            })

            .state('app.home', {
                abstract: true,
                url: '/home',
                templateUrl: 'views/home/home.context.html',
                controller: 'homeContextController',
                data: {
                    title: 'Home'
                }
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
                template: '<div ui-view class="partial__wrapper"></div>',
                data: {
                    title: 'Reporting'
                }
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
                template: '<div ui-view class="partial__wrapper"></div>',
                data: {
                    title: 'Admin'
                }
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

    /**
     * Application entry module
     */
    angular.module('app', [
            'ui.router',
            'ngAnimate'
        ])
        .config(stateConfig);

})(angular, jQuery);
