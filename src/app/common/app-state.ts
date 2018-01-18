import { ActionReducerMap } from '@ngrx/store';

import * as counter from './counter';

export interface AppState {
  count: counter.State;
}

export const initialState: AppState = {
  count: counter.initialState,
}

export const reducers: ActionReducerMap<AppState> = {
  count: counter.counterReducer
}

export const getCountValue = (s: AppState) => s.count.value;
