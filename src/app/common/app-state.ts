import { ActionReducerMap } from '@ngrx/store';

import { counterReducer } from './counter';

export interface AppState {
  count: number;
}

export const initialState: AppState = {
  count: 5,
}

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer
}
