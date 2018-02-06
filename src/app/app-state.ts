import { Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

import * as counter from './common-store/demo-counter/counter';
import * as patientListStore from './patient-list/store';
import * as router from './common-store/router/'
import * as patientObsStore from './patient-observation/store'
import * as userStore from './common-store/user/';

export interface AppState {
  count: counter.State;
  routerReducer: RouterReducerState<router.State>;
  user: userStore.State;
  patientList: patientListStore.State;
  patientObservations: any;
}

export const initialState: AppState = {
  count: counter.initialState,
  routerReducer: router.initialState,
  user: userStore.initialState,
  patientList: patientListStore.initialState,
  patientObservations: patientObsStore.initialState
}

export const reducers: ActionReducerMap<AppState> = {
  count: counter.counterReducer,
  routerReducer,
  user: userStore.reducer,
  patientList: patientListStore.reducer,
  patientObservations: patientObsStore.reducer
}

export const effects: Array<any> = [
  userStore.UserEffects,
  patientListStore.PatientListEffects,
  patientObsStore.PatientObservationEffects
]

export const getCountValue = (s: AppState) => s.count.value;
export const getRoute = (s: AppState) => s.routerReducer.state.url;
export const getUser = (s: AppState) => s.user;
export const getPatientList = (s: AppState) => s.patientList.patients;
export const getPatientObservations = (s: AppState) => s.patientObservations;
