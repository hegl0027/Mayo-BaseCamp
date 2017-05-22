var HomePage = function () {
    browser.get('/');
};

HomePage.prototype = Object.create({}, {
    button: {
        get: function () {
            return element(by.css('.a-btn'));
        }
    }
});

export default HomePage;
