import { Action } from '@ngrx/store';
import {
  DECREMENT_COUNTER,
  DecrementAction,
  INCREMENT_COUNTER,
  IncrementAction,
  RESET_COUNTER
} from './counter.actions';


/**
 * STATE SHAPE
 */
export interface State {
  value: number;
}


/**
 * INITIAL STATE
 *
 * @type {{value: number}}
 */
export const initialState: State = {
  value: 0
};


/**
 * REDUCER - State mutation happens here
 *
 * @param {State} state
 * @param {Action} a
 * @returns {State}
 */
export function reducer(state = initialState, a: Action): State {
  switch (a.type) {
    case INCREMENT_COUNTER:
      const i = {...state};
      i.value += (a as IncrementAction).payload;
      return i;
    case DECREMENT_COUNTER:
      const d = {...state};
      d.value -= (a as DecrementAction).payload;
      return d;
    case RESET_COUNTER:
      return {...initialState};
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
export const getCurrentCount = (s: State) => s.value;
