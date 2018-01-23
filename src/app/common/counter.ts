import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface State {
  value: number;
}

export const initialState: State = {
  value: 5
}

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      let newIncState = Object.assign({}, state);
      newIncState.value += 1;
      return newIncState;
    case DECREMENT: 
      let newDecState = Object.assign({}, state);
      newDecState.value -= 1;
      return newDecState;
    case RESET:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}
