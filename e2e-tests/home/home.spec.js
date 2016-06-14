describe('my app', () => {

    it('should automatically redirect to /app/home/one when location hash/fragment is empty', () => {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch("/app/home/one");
    });

});
