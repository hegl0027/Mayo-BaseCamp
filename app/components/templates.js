'use strict'; module.exports = angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('base/base.html','<!-- PRIMARY VERTICAL NAV BAR ON THE LEFT HAND SIDE OF THE VIEWPORT -->\n<nav class="nav__primary" ui-view="nav"></nav>\n\n<!-- MORE OR LESS EVERYTHING BUT THE PRIMARY NAV -->\n<main class="content__wrapper">\n    <header ui-view="header" class="snow"></header>\n\n    <!-- ALL VIEWS ARE INJECTED HERE -->\n    <div ui-view class="content"></div>\n\n    <!-- FOOTER CONTENT HERE -->\n    <footer ui-view="footer" class="footer"></footer>\n</main>\n');
$templateCache.put('header/header.html','<section class="app-logo__wrapper">\n    <svg class="app-logo">\n        <use xlink:href="#icon-app-logo"/>\n    </svg>\n</section>\n<section class="app-name">Basecamp</section>\n<section class="app-context"></section>\n<section class="username">\n    {{base.user.lastName}}, {{base.user.firstName}}\n    <div class="user-links">\n        <a href="" class="link" data-ng-click="base.openLogout()">logout</a> |\n        <a href="" class="link" data-ng-click="base.openSettings()">settings</a>\n    </div>\n</section>\n<svg class="icon icon--user">\n    <use xlink:href="#icon-user"/>\n</svg>');
$templateCache.put('footer/footer.html','<div>\n    <a class="link" target="_blank" data-ng-href="http://codepen.io/bradyhullopeter/pen/yebXNZ">see dark theme</a>\n</div>\n<div class="saved-msg">Last saved {{base.lastSaved}}</div>');
$templateCache.put('home/home-abstract.html','<main class=\'partial\'>\n\n\n    <nav class=\'nav__secondary\'>\n        <ul class=\'nav__secondary--horizontal\'>\n            <li class=\'crumb\'>HOME</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.home.one\'>One</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.home.two\'>Two</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.home.three\'>Three</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.home.four\'>Four</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.home.five\'>Five</li>\n        </ul>\n        <div class=\'nav__secondary--drawer\'>\n            <input type=\'checkbox\' class=\'check\' id=\'checked\'>\n            <label class=\'menu-btn\' for=\'checked\'>\n                <span class=\'bar top\'></span>\n                <span class=\'bar middle\'></span>\n                <span class=\'bar bottom\'></span>\n                <span class=\'menu-btn__text\'>MENU</span>\n            </label>\n            <div class=\'list\'>\n                <ul>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.home.one\'>One</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.home.two\'>Two</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.home.three\'>Three</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.home.four\'>Four</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.home.five\'>Five</li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n    <section class=\'abstract-context__horizontal\'>\n        Cross-view context info goes here...\n    </section>\n\n    <div ui-view class=\'partial__wrapper\'></div>\n</main>\n');
$templateCache.put('reporting/reporting-abstract.html','<main class=\'partial\'>\n    <nav class=\'nav__secondary\'>\n        <ul class=\'nav__secondary--horizontal\'>\n            <li class=\'crumb\'>REPORTING</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.one\'>One</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.two\'>Two</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.three\'>Three</li>\n        </ul>\n        <div class=\'nav__secondary--drawer\'>\n            <input type=\'checkbox\' class=\'check\' id=\'checked\'>\n            <label class=\'menu-btn\' for=\'checked\'>\n                <span class=\'bar top\'></span>\n                <span class=\'bar middle\'></span>\n                <span class=\'bar bottom\'></span>\n                <span class=\'menu-btn__text\'>MENU</span>\n            </label>\n            <div class=\'list\'>\n                <ul>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.one\'>One</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.two\'>Two</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.reporting.three\'>Three</li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n\n\n    <section class="abstract-context__vertical__wrapper">\n        <section class=\'abstract-context__vertical patient__sidebar\'>\n            <svg class="icon icon--user">\n                <use xlink:href="#icon-user"></use>\n            </svg>\n            <div class="patient__sidebar__name">Patient, Eric J.</div>\n        </section>\n\n        <div ui-view class=\'partial__wrapper\'></div>\n    </section>\n</main>\n');
$templateCache.put('nav/nav.html','<section class="mc-stack__wrapper">\n    <svg class="mc-stack">\n        <use xlink:href="#icon-mc-stack-white"/>\n    </svg>\n</section>\n\n<ul class="nav__primary__list">\n    <li class="nav ng-class:{\'selected\': base.doesStateInclude(\'app.home\')};" ui-sref="app.home.one">\n        <svg class="icon icon--nav">\n            <use xlink:href="#icon-home"/>\n        </svg>\n        <span>Home</span>\n    </li>\n    <li class="nav ng-class:{\'selected\': base.doesStateInclude(\'app.reporting\')};" ui-sref="app.reporting.one">\n        <svg class="icon icon--nav">\n            <use xlink:href="#icon-file-text"/>\n        </svg>\n        <span>Reporting</span>\n    </li>\n    <li class="nav ng-class:{\'selected\': base.doesStateInclude(\'app.admin\')};" ui-sref="app.admin.one">\n        <svg class="icon icon--nav">\n            <use xlink:href="#icon-cog"/>\n        </svg>\n        <span>System Administration</span>\n    </li>\n    <li class="nav">\n        <a target="_blank" data-ng-href="https://mcsm.service-now.com">\n            <svg class="icon icon--nav">\n                <use xlink:href="#icon-question"/>\n            </svg>\n            <span>Support</span>\n        </a>\n    </li>\n</ul>\n<section class="app-version">\n    <!-- This is generated based on the version listed in package.json -->\n    <!-- inject:version -->\n    0.1.7\n    <!-- endinject -->\n</section>\n');
$templateCache.put('support/support.html','<section class=\'partial__wrapper\'>\n    <label for=\'support_description\'>What can we help you with?</label>\n    <textarea id=\'support_description\'></textarea>\n    <button type=\'submit\' class=\'a-btn--filled\'>Send</button>\n</section>');
$templateCache.put('sysadmin/sysadmin-abstract.html','<main class=\'partial\'>\n    <nav class=\'nav__secondary\'>\n        <ul class=\'nav__secondary--horizontal\'>\n            <li class=\'crumb\'>SYS. ADMIN.</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.admin.one\'>One</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.admin.two\'>Two</li>\n            <li ui-sref-active=\'selected\' ui-sref=\'app.admin.three\'>Three</li>\n        </ul>\n        <div class=\'nav__secondary--drawer\'>\n            <input type=\'checkbox\' class=\'check\' id=\'checked\'>\n            <label class=\'menu-btn\' for=\'checked\'>\n                <span class=\'bar top\'></span>\n                <span class=\'bar middle\'></span>\n                <span class=\'bar bottom\'></span>\n                <span class=\'menu-btn__text\'>MENU</span>\n            </label>\n            <div class=\'list\'>\n                <ul>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.admin.one\'>One</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.admin.two\'>Two</li>\n                    <li ui-sref-active=\'selected\' ui-sref=\'app.admin.three\'>Three</li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div ui-view class=\'partial__wrapper\'></div>\n</main>\n');
$templateCache.put('home/five/home-five.html','Hi from home five');
$templateCache.put('home/four/home-four.html','Hi from home four');
$templateCache.put('home/one/home-one.html','<div>Hi from home one</div>\n<div>Last saved {{base.lastSaved}} </div>\n<button class="a-btn">Button</button>');
$templateCache.put('home/three/home-three.html','Hi from home three');
$templateCache.put('home/two/home-two.html','Hi from home two');
$templateCache.put('reporting/one/reporting-one.html','Hi from reporting one');
$templateCache.put('reporting/three/reporting-three.html','Hi from reporting three');
$templateCache.put('reporting/two/reporting-two.html','Hi from reporting two');
$templateCache.put('sysadmin/one/sysadmin-one.html','<h1>500 Server Error</h1>\n<p>Sorry, something went wrong.</p>\n<p>A team is highly trained monkeys has been dispatched to deal with this situation.</p>\n<p>If you see them, show them this information (screenshots frighten them):</p>\nAB38WEMQgYMwAsSndv0qRVwB2h6TTDLZbomJEWU6qMCSOlXSieCCjveU 7hDWK8oeERuik9Fw-jLjNcz\nrdngnBDUZpExmTWm6BdtwUW26ecXKhmYi NnZ91eCdo8ejZ5bzzhv9pYvCPlTDFN6vq6pHgGMqBsfH7EMrHYFj\nlwq_ 7yWIObcAM2Ni1tTP1fR8EkhGYIwD1gpYuNLBnVT-imW3RBgFijeA8iLA v0TEZ_HkJP7rRG\nS0txolsJEP_vMnhJZKdEd3VP1zfhoB6Vl_cUhtr69 yB6be9FMd6kRpnSiItgbxPvyrFa75aJlkBe0H72CdA\nXeRifbGaDc1_q2 44Tms5HH6dfasPa9kVkzhy3GkpTbXZGIPRynzhRdrb0R8uMv-Y7kyhC6 JgEAQoe5zld02-rlMu\n6DpN6fFtkGWZ3Lt-e-hECLRuYqHX-eCW567f8c mmxd8YEGRS4qURfh4eFl1uvQ_b0rEOZTHrkzUNlTLbSI\nW6FesFccjX83 ybB5fP-21S60JudEj1ZzM6m50GPFTV8gRFDz5r7-cFR1uMkKfnq1U0FC b1Tehcova6OabgROH\nDljpM3J8jJlLEmQKqxOSugMzmelDZLVw30pMyjb Wm4U4fin2J4sTIN9AYFo-aGzmv4JvbSURzKGamVPXt2R6v2PvB5SPeB\nb yJ8oVAv5j34bClZksFlShm5xTCUEAB3q9FfoUSvqqT6pOOoeHqFEmiGl ggJcl79sAFfjSVeSRpU5qjJ4np7ve3-jImsQ\nNLO7lCC-FDq3Ao8peKPc wVQDNTXcXXTSpMkk5mWJG4LRgaVQG4mFg-gcRTphCK_hWeFsoEgrdX_D j_bdM13tBeQFFv\n8lIXNcMX6bME36U8PaBWCMjGBlhZVpZ9vArH0vehC0 FO5SPxWJsAjCJU1XY2f6AMPQioQS9h2OOZA6p6EFmGFNw-\nd5jeqvLIfx Cp3BHa_cddgBHQabZI77Db62hSoAzI-8FrJWy9dDTWjuj_MntCZcfUNY URSrXvXsiKRaz_5sJ-S2rSX\n2aCxJSne_gsgT1Y-YIzO1xBD9wuLts20G 4YX2Scpyj8mui7I8bn_Sx6H3iyFMrEVJwhneCKbeaXMiIOk6CiJNgS3s j\ndcLUB_Nv5tR35j8BvAbW5ZgNT57SKp9SDFDdTZyDfJ0Eg9aCjxARVBc T4V6Hs_c31yZ5SDnu0e9drBS5ynf_ZydZAJR9\nAEiEAQfzayUjJgy9NCB viA0_EPY2dVPOlW3VWJ7C5HhKksSXeWQ45fE0IS1WOwOlq50yvKF0SoB asoT4ziflWe92IA\n56Ds3_XXeWMBwcOjXIb2KCkqE_hdChOyZpiufLB4t Ngl5WAglVNfV1Z45omJv4MGiBgUcpICvYmkJ_OcTVi03BbS9cuX\nlBbE7 ivuqu1AfHPnKp8RBGpY_mKpLrYKYhJ5faXi2INdZ-9xh6MAqehN6cKQj SgweGtclPuX0teQye3h8P5vp425ARfQEz\nbFYmRULRQiITz16az-JgVmP Di3XaE4Qq7rFpumWPuuHGqlTjmurFIuh0SZ2sklMxPQFGOYIEjNNsEtE UPuL0DApAqnP\n1AH3mHMqHKzdgzFvg7k9Z86M5yt4CDatYmjktsuNzdBJ wArAWFRfr86x7XBdkr9eVa8Hp-6x86CzR38nypBBddU2J\nr4E8RsG8-7h iCvxlHwRoPXoGouIXflUIe5mHZveEAtQGYZzeJKFvZ8YojTLLx8bKFgu zsJ0Cll3bWmHZS5ZPH\nzppuvZauwaVKFxLX0EjjdMOiFaueno1pXfp4jm 3QqdllBQSzai4Z2wXfhU9Ql_cFzqpzfPMBNxt6mge-0ARsMsEeR5PDF\n2wNglV05GkaVp4JgWSTo7lQ3OnJKQNmECTGaYNbGR7IsGigTMc3QM0iH 9ueR3-l75e3YYMlRl9tZWquJd54eGh5vYTL\nrbW60CrBZQLSKpxqpxX_W 9x_aaEhESZSXVx0');
$templateCache.put('sysadmin/three/sysadmin-three.html','Hi from sysadmin three');
$templateCache.put('sysadmin/two/sysadmin-two.html','Hi from sysadmin two');}]);