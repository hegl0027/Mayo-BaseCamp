import {expect} from 'chai';
import HomeTwoController from './home-two.controller';

let ctrl;

describe('home two controller', () => {

  beforeEach(() => {
    ctrl = new HomeTwoController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
