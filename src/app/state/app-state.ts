import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as patientListStore from '../delete-me/examples/fhir/patient-list/store/index';
import * as router from '../router/state/index';
import * as patientObsStore from '../delete-me/examples/fhir/patient-observation/store/index';
import * as patientConditionsStore from '../delete-me/examples/fhir/patient-condition/store/index';
import { environment } from '../../environments/environment';

export interface AppState {
  routerReducer: RouterReducerState<router.State>;
  patientList: patientListStore.State;
  patientObservations: any;
  patientConditions: any;
}

export const initialState: AppState = {
  routerReducer: router.initialState,
  patientList: patientListStore.initialState,
  patientObservations: patientObsStore.initialState,
  patientConditions: patientConditionsStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  routerReducer,
  patientList: patientListStore.reducer,
  patientObservations: patientObsStore.reducer,
  patientConditions: patientConditionsStore.reducer
};

export const effects: Array<any> = [
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
export const getPatientList = (s: AppState) => s.patientList.patients;
export const getPatientObservations = (s: AppState) => s.patientObservations;
export const getPatientConditions = (s: AppState) => s.patientConditions;
