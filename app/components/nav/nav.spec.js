import {assert, expect} from 'chai';
import NavController from './nav.controller';

let ctrl;

describe('nav controller', () => {
  const mockState = {};

  beforeEach(() => {
    ctrl = new NavController(mockState);
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });

  it('should calculate nearest state', () => {
    mockState.current = {
      name: 'app.support'
    };

    assert(ctrl.isClosestState('app.support'));
  });
});
