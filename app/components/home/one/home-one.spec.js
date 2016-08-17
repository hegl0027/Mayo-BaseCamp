import {expect} from 'chai';
import HomeOneController from './home-one.controller';

let ctrl;

describe('home one controller', () => {

  beforeEach(() => {
    ctrl = new HomeOneController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
