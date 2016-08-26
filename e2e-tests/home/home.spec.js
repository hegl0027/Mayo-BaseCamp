import HomePage from './home.page';
import $ from 'jquery';
import http from 'http'
let page;

describe('app home', () => {

  beforeEach(function () {
    page = new HomePage();

    http.request({
      auth: 'user:password',
      path: 'sample/sample.json'
    }, (res) => {
      console.log(res);
    }).end();
  });

  describe('empty fragment redirect', () => {
    it('should automatically redirect to /app/home/one when location hash/fragment is empty', () => {
      expect(browser.getLocationAbsUrl()).toMatch("/app/home/one");
    });
  });

  describe('button', () => {
    it('should have a button', () => {
      expect(page.button.getText()).toEqual('Button');
    })
  });

});
