import 'core-js';

import {expect} from 'chai';
import {FooterComponent} from './footer.component';

let ctrl: FooterComponent;

describe('footer controller', () => {

  beforeEach(() => {
    ctrl = new FooterComponent();
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
