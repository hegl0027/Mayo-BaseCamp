(function (angular) {
    'use strict';

    var stateConfig = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/app/home/one');

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                template: '<div ui-view></div>'
            })

            .state('app.support', {
                url: '/support',
                templateUrl: 'views/support/support.html',
                controller: 'supportController',
                data: {
                    title: 'Support',
                    hasSecondaryNav: false
                }
            })

            .state('app.voiceandtone', {
                url: '/voiceandtone',
                templateUrl: 'views/voiceandtone/voiceandtone.html',
                controller: 'voiceAndToneController',
                data: {
                    title: 'Voice and Tone',
                    hasSecondaryNav: false
                }
            })

            .state('app.design', {
                abstract: true,
                url: '/design',
                templateUrl: 'views/design/design.abstract.html',
                controller: 'abstractDesignController',
                data: {
                    title: 'Design',
                    hasSecondaryNav: true
                }
            })

            .state('app.design.patterns', {
                url: '/patterns',
                templateUrl: 'views/design/patterns/design.patterns.html',
                controller: 'patternsController'
            })

            .state('app.architecture', {
                url: '/architecture',
                templateUrl: 'views/architecture/architecture.html',
                controller: 'architectureController',
                data: {
                    title: 'Architecture',
                    hasSecondaryNav: false
                }
            })

            .state('app.fonz', {
                url: '/fonz',
                templateUrl: 'views/fonz/fonz.html',
                data: {
                    title: 'The Fonz',
                    hasSecondaryNav: false
                }
            })

            .state('app.home', {
                abstract: true,
                url: '/home',
                templateUrl: 'views/home/home.abstract.html',
                controller: 'abstractHomeController',
                data: {
                    title: 'Home',
                    hasSecondaryNav: true
                }
            })
            .state('app.home.one', {
                url: '/one',
                templateUrl: 'views/home/home.one.html',
                controller: 'homeOneController'
            })
            .state('app.home.two', {
                url: '/two',
                templateUrl: 'views/home/home.two.html',
                controller: 'homeTwoController'
            })
            .state('app.home.three', {
                url: '/three',
                templateUrl: 'views/home/home.three.html',
                controller: 'homeThreeController'
            })
            .state('app.home.four', {
                url: '/four',
                templateUrl: 'views/home/home.four.html',
                controller: 'homeFourController'
            })
            .state('app.home.five', {
                url: '/five',
                templateUrl: 'views/home/home.five.html',
                controller: 'homeFiveController'
            })

            /* REPORTING ROUTING*/
            .state('app.reporting', {
                abstract: true,
                url: '/reporting',
                template: '<div ui-view class="partial__wrapper"></div>',
                controller: 'abstractReportingController',
                data: {
                    title: 'Reporting',
                    hasSecondaryNav: true
                }
            })
            .state('app.reporting.one', {
                url: '/one',
                templateUrl: 'views/reporting/reporting.one.html',
                controller: 'reportingOneController'
            })
            .state('app.reporting.two', {
                url: '/two',
                templateUrl: 'views/reporting/reporting.two.html',
                controller: 'reportingTwoController'
            })
            .state('app.reporting.three', {
                url: '/three',
                templateUrl: 'views/reporting/reporting.three.html',
                controller: 'reportingThreeController'
            })

            /* ADMIN ROUTING*/
            .state('app.admin', {
                abstract: true,
                url: '/admin',
                template: '<div ui-view class="partial__wrapper"></div>',
                controller: 'abstractAdminController',
                data: {
                    title: 'Admin',
                    hasSecondaryNav: true
                }
            })
            .state('app.admin.one', {
                url: '/one',
                templateUrl: 'views/sysadmin/sysadmin.one.html',
                controller: 'adminOneController'
            })
            .state('app.admin.two', {
                url: '/two',
                templateUrl: 'views/sysadmin/sysadmin.two.html',
                controller: 'adminTwoController'
            })
            .state('app.admin.three', {
                url: '/three',
                templateUrl: 'views/sysadmin/sysadmin.three.html',
                controller: 'adminThreeController'
            });
    };

    var loadingBarConfig = function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeBar = false;
        cfpLoadingBarProvider.latencyThreshold = 20;
    };

    /**
     * Application entry module
     */
    angular.module('app', [
            'ui.router',
            'ngAnimate',
            'angular-loading-bar',
            'ngResource',
            'ngDialog'
        ])
        .config(stateConfig)
        .config(loadingBarConfig);

})(angular);
