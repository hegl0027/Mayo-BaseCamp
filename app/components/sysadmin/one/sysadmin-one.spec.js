import {expect} from 'chai';
import SysadminOneController from './sysadmin-one.controller';

let ctrl;

describe('sys admin one controller', () => {

  beforeEach(() => {
    ctrl = new SysadminOneController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
