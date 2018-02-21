import { Action } from "@ngrx/store";

import { State as PatientState } from './patient-list.state';

export const LOAD_PATIENT_LIST: string = "[patient-list] Load Patient List Action";
export const PATIENT_LIST_LOADED: string = "[patient-list] Patient List Loaded";

export class LoadPatientListAction implements Action {
  readonly type: string = LOAD_PATIENT_LIST;

  constructor(public payload: any) { }
}

export class PatientListLoadedAction implements Action {
  readonly type: string = PATIENT_LIST_LOADED;

  constructor(public payload: any) { }
}
