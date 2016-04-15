'use strict';
/* todo: update this for view1 */
describe('my app', function() {
  
  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[data-ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
