import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from './counter.actions';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {
  }

  @Effect({dispatch: false})
  consoleLog$: Observable<Action> = this.actions$
    .ofType(INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER)
    .pipe(
      tap(a => {
        console.log('From counter.effects.ts: ', a);
      })
    );

}
