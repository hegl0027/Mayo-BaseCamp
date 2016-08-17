import {expect} from 'chai';
import NavController from './nav.controller';

let ctrl;

describe('nav controller', () => {

  beforeEach(() => {
    ctrl = new NavController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
