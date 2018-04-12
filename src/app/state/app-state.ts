import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromCounter from '../delete-me/examples/counter/state/counter.reducer';
import * as patientListStore from '../patient-list/store/index';
import * as router from '../router/state/index';
import * as patientObsStore from '../patient-observation/store/index';
import * as patientConditionsStore from '../patient-condition/store/index';
import * as userStore from '../common-store/user/index';
import { COUNTER } from '../delete-me/examples/counter/state/counter.actions';
import { environment } from '../../environments/environment';

export interface AppState {
  routerReducer: RouterReducerState<router.State>;
  user: userStore.State;
  patientList: patientListStore.State;
  patientObservations: any;
  patientConditions: any;
}

export const initialState: AppState = {
  routerReducer: router.initialState,
  user: userStore.initialState,
  patientList: patientListStore.initialState,
  patientObservations: patientObsStore.initialState,
  patientConditions: patientConditionsStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  routerReducer,
  user: userStore.reducer,
  patientList: patientListStore.reducer,
  patientObservations: patientObsStore.reducer,
  patientConditions: patientConditionsStore.reducer
};

export const effects: Array<any> = [
  userStore.UserEffects,
  patientListStore.PatientListEffects,
  patientObsStore.PatientObservationEffects,
  patientConditionsStore.PatientConditionEffects
];

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    const result = reducer(state, action);
    console.log(result);
    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];


// todo: refactor these to use the ngrx selector api like the counter example below
export const getRoute = (s: AppState) => s.routerReducer.state.url;
export const getUser = (s: AppState) => s.user;
export const getPatientList = (s: AppState) => s.patientList.patients;
export const getPatientObservations = (s: AppState) => s.patientObservations;
export const getPatientConditions = (s: AppState) => s.patientConditions;



export const getCounterState = createFeatureSelector<fromCounter.State>(COUNTER);
export const getCurrentCount = createSelector(getCounterState, fromCounter.getCurrentCount);
