import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { SIGN_IN_USER, SignInAction, UserSignedInAction } from "./user.action";
import { State as UserState } from "./user.reducer";

@Injectable()
export class UserEffects {
    constructor(private action$: Actions) { }

    @Effect()
    public user$ = this.action$.ofType(SIGN_IN_USER)
      .switchMap(() => {
              return Observable.of({
                name: "Some Test User",
                id: 123321,
                isLoggedIn: true
              } as UserState);
            })
      .map((user) => new UserSignedInAction(user));
}

