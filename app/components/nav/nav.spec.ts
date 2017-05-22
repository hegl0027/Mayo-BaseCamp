import 'core-js';

import {assert, expect} from 'chai';
import {PrimaryNavComponent} from './nav.component';

let component: PrimaryNavComponent;

interface State {
  current: any;
}

describe('nav controller', () => {
  const mockState: State = {
    current: null
  };

  beforeEach(() => {
    component = new PrimaryNavComponent();
  });

  it('should be initialized', () => {
    expect(component).to.exist;
  });
});

