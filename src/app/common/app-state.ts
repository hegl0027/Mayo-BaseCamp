import { Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

import * as counter from './counter';
import * as userReducer from './user.reducer';
import * as patientListNgrx from '../patient-list/store';
import * as router from './router/'

export interface AppState {
  count: counter.State;
  routerReducer: RouterReducerState<router.State>;
  user: userReducer.State;
  patientList: patientListNgrx.State;
}

export const initialState: AppState = {
  count: counter.initialState,
  routerReducer: router.initialState,
  user: userReducer.initialState,
  patientList: patientListNgrx.initialState 
}

export const reducers: ActionReducerMap<AppState> = {
  count: counter.counterReducer,
  routerReducer,
  user: userReducer.reducer,
  patientList: patientListNgrx.reducer
}

export const getCountValue = (s: AppState) => s.count.value;
export const getRoute = (s: AppState) => s.routerReducer.state.url;
export const getUser = (s: AppState) => s.user;
export const getPatientList = (s: AppState) => s.patientList.patients;
