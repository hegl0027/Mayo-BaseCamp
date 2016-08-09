var HomePage = function () {
    browser.get('/');
};

HomePage.prototype = Object.create({}, {
    getButton: {
        get: function () {
            return element(by.css('.a-btn'));
        }
    }
});

export default HomePage;