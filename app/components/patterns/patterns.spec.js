import {expect} from 'chai';
import PatternsController from './patterns.controller';

let ctrl;

describe('patterns controller', () => {

  beforeEach(() => {
    ctrl = new PatternsController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
