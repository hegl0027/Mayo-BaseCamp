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
                controller: 'supportController',
                data: {
                    title: 'Support',
                    hasSecondaryNav: false
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('support/support.html');
                }
            })

            .state('app.voiceandtone', {
                url: '/voiceandtone',
                controller: 'voiceAndToneController',
                data: {
                    title: 'Voice and Tone',
                    hasSecondaryNav: false
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('voiceandtone/voiceandtone.html');
                }
            })

            .state('app.design', {
                abstract: true,
                url: '/design',
                controller: 'abstractDesignController',
                data: {
                    title: 'Design',
                    hasSecondaryNav: true
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/design.abstract.html');
                }
            })

            .state('app.design.patterns', {
                url: '/patterns',
                controller: 'patternsController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/patterns/design.patterns.html');
                }
            })

            .state('app.design.components', {
                url: '/components',
                controller: 'componentsController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/components/design.components.html');
                }
            })

            .state('app.design.foundations', {
                url: '/foundations',
                controller: 'foundationsController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/foundations/design.foundations.html');
                }
            })

            .state('app.design.onboarding', {
                url: '/onboarding',
                controller: 'onboardingController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/onboarding/design.onboarding.html');
                }
            })

            .state('app.design.overview', {
                url: '/overview',
                controller: 'overviewController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('design/overview/design.overview.html');
                }
            })

            .state('app.architecture', {
                url: '/architecture',
                controller: 'architectureController',
                data: {
                    title: 'Architecture',
                    hasSecondaryNav: false
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('architecture/architecture.html');
                }
            })

            .state('app.fonz', {
                url: '/fonz',
                data: {
                    title: 'The Fonz',
                    hasSecondaryNav: false
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('fonz/fonz.html');
                }
            })

            .state('app.home', {
                abstract: true,
                url: '/home',
                controller: 'abstractHomeController',
                data: {
                    title: 'Home',
                    hasSecondaryNav: true
                },
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.abstract.html');
                }
            })

            .state('app.home.one', {
                url: '/one',
                controller: 'homeOneController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.one.html');
                }
            })

            .state('app.home.two', {
                url: '/two',
                controller: 'homeTwoController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.two.html');
                }
            })

            .state('app.home.three', {
                url: '/three',
                controller: 'homeThreeController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.three.html');
                }
            })

            .state('app.home.four', {
                url: '/four',
                controller: 'homeFourController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.four.html');
                }
            })

            .state('app.home.five', {
                url: '/five',
                controller: 'homeFiveController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('home/home.five.html');
                }
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
                controller: 'reportingOneController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('reporting/reporting.one.html');
                }
            })

            .state('app.reporting.two', {
                url: '/two',
                controller: 'reportingTwoController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('reporting/reporting.two.html');
                }
            })

            .state('app.reporting.three', {
                url: '/three',
                controller: 'reportingThreeController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('reporting/reporting.three.html');
                }
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
                controller: 'adminOneController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('sysadmin/sysadmin.one.html');
                }
            })

            .state('app.admin.two', {
                url: '/two',
                controller: 'adminTwoController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('sysadmin/sysadmin.two.html');
                }
            })

            .state('app.admin.three', {
                url: '/three',
                controller: 'adminThreeController',
                templateProvider: function ($templateCache) {
                    return $templateCache.get('sysadmin/sysadmin.three.html');
                }
            });
    };

    var loadingBarConfig = function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
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
