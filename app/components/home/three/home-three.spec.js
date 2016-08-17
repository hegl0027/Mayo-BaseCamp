import {expect} from 'chai';
import HomeThreeController from './home-three.controller';

let ctrl;

describe('home three controller', () => {

  beforeEach(() => {
    ctrl = new HomeThreeController();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
