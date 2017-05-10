import {expect} from 'chai';
import {HomeOneComponent} from './home-one.component';

let component: HomeOneComponent;

describe('home one controller', () => {

  beforeEach(() => {
    component = new HomeOneComponent();
  });

  it('should be initialized', () => {
    expect(component).to.exist;
  });
});
