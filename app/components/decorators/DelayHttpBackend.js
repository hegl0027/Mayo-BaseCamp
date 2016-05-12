(function (angular) {
    'use strict';

    angular.module('appResourceMocks')
        .config(function ($provide) {
            $provide.decorator('$httpBackend', function ($delegate) {
                var proxy = function (method, url, data, callback, headers) {
                    var interceptor = function () {
                        var _this = this;
                        var _arguments = arguments;

                        if (url.match(/views\/.*/)) {
                            callback.apply(_this, _arguments);
                        } else {
                            callback.apply(_this, _arguments);
                            
                            // setTimeout(function () {
                            //     callback.apply(_this, _arguments);
                            // }, Math.random() * 900 + 100);
                        }
                    };

                    return $delegate.call(this, method, url, data, interceptor, headers);
                };

                for (var key in $delegate) {
                    proxy[key] = $delegate[key];
                }

                return proxy;
            });
        });
})(angular);