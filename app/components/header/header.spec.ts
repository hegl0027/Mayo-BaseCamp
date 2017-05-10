import {expect} from 'chai';
import {MainHeaderComponent} from './header.component';

import {UserService} from '../../shared/user/UserService';
import {MockUserService} from '../../shared/user/MockUserService';

let ctrl: MainHeaderComponent;

describe('header controller', () => {
  let mockUserService: UserService;

  beforeEach(() => {
    mockUserService = new MockUserService();
    ctrl = new MainHeaderComponent(mockUserService);
  });

  it('should be initialized', () => {
    expect(ctrl).to.exist;
  });
});
