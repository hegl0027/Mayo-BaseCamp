import { Action } from '@ngrx/store';
import { StarShip } from './starwars.interfaces';

export const STAR_WARS = '[STAR_WARS]';
export const LOAD_STARSHIP_DATA = `${STAR_WARS} :: load Starship data`;
export const LOAD_STARSHIP_DATA_SUCCESS = `${STAR_WARS} :: load Starship data success`;

export class LoadStarshipDataAction implements Action {
  readonly type: string = LOAD_STARSHIP_DATA;

  public constructor() {
  }
}

export class LoadStarshipDataSuccessAction implements Action {
  readonly type: string = LOAD_STARSHIP_DATA_SUCCESS;

  public constructor(public payload: StarShip[]) {
  }
}

export type StarWarsActions =
  LoadStarshipDataAction | LoadStarshipDataSuccessAction;
