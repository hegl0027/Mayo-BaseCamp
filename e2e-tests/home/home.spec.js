import HomePage from './home.page';

import {expect} from 'chai';

let page;

describe('app home', () => {

  beforeEach(function () {
    page = new HomePage();
  });

  describe('empty fragment redirect', () => {
    it('should automatically redirect to /app/home/one when location hash/fragment is empty', () => {
      expect(browser.getLocationAbsUrl()).match("/app/home/one");
    });
  });

});
