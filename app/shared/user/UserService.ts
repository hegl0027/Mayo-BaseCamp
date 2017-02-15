import {Observable} from 'rxjs/Observable';

import {OpaqueToken} from '@angular/core';

export interface User {
  firstName: String;
  lastName: String;
}

export const USER_SERVICE = new OpaqueToken('UserService');

export interface UserService {
  getCurrentUser(): Observable<User>;
}

