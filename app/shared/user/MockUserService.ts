import * as Rx from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import {UserService, User} from './UserService';

@Injectable()
export class MockUserService implements UserService {
  getCurrentUser(): Rx.Observable<User> {
    return Rx.Observable.create(function(observer: any) {
      const USER: User = {
        firstName: 'Stan',
        lastName: 'Lee'
      };

      //Mock an observable with only one value
      observer.next(USER);
      observer.complete();
    });
  }
}

