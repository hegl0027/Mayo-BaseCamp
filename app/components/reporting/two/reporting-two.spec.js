import {expect} from 'chai';
import ReportingTwoController from './reporting-two.controller';

let ctrl;

describe('reporting two controller', () => {

  beforeEach(() => {
    ctrl = new ReportingTwoController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
