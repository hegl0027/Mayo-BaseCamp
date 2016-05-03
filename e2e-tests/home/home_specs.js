'use strict';

describe('my app', function () {

    it('should automatically redirect to /app/home/one when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/app/home/one");
    });

});
