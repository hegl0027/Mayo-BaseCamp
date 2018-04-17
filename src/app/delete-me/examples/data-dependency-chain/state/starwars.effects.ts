import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { LOAD_STARSHIP_DATA, LoadStarshipDataSuccessAction } from './starwars.actions';
import { StarWarsService } from '../../../shared/starwars.service';
import { StarShip } from './starwars.interfaces';

@Injectable()
export class StarWarsEffects {
  constructor(private actions$: Actions, private starWarsService: StarWarsService) {
  }

  @Effect()
  starships$: Observable<Action> = this.actions$
    .ofType(LOAD_STARSHIP_DATA)
    .switchMap(() => this.starWarsService.getStarships()
      .map((data: StarShip[]) => new LoadStarshipDataSuccessAction(data))
    );
}
