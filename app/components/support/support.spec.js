import {expect} from 'chai';
import SupportController from './support.controller';

let ctrl;

describe('support controller', () => {

  beforeEach(() => {
    ctrl = new SupportController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
