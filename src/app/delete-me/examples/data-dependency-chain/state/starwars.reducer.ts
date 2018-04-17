import { Action } from '@ngrx/store';
import { LOAD_STARSHIP_DATA_SUCCESS, LoadStarshipDataSuccessAction } from './starwars.actions';
import { StarShip } from './starwars.interfaces';


export interface State {
  starShips: StarShip[];
}

/**
 * INITIAL STATE
 *
 * @type {{value: number}}
 */
export const initialState = {
  starShips: []
}


/**
 * REDUCER - State mutation happens here
 *
 * @param {State} state
 * @param {Action} a
 * @returns {State}
 */
export function reducer(state = initialState, a: Action): State {
  switch (a.type) {
    case LOAD_STARSHIP_DATA_SUCCESS: {
      return {starShips: (a as LoadStarshipDataSuccessAction).payload};
    }
    default:
      return state;
  }
}


/**
 * FEATURE SPECIFIC SELECTORS
 *
 * @param {State} s
 * @returns {number}
 */
export const getStarWarsState = (s: State) => s;
export const getStarShips = (s: State) => s.starShips;
