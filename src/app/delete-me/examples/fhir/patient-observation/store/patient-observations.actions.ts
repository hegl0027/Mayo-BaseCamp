import { Action } from "@ngrx/store";

//import { State as PatObsState } from './patient-observations.state';

export const LOAD_OBSERVATIONS_FOR_PATIENT: string = "[patient-observations] Load Observations for Patient Action";
export const OBSERVATIONS_FOR_PATIENT_LOADED: string = "[patient-observations] Patient Observations Loaded";

export class LoadObservationsForPatientAction implements Action {
  readonly type: string = LOAD_OBSERVATIONS_FOR_PATIENT;
  constructor(public payload: string) { }
}

export class ObservationsForPatientLoadedAction implements Action {
  readonly type: string = OBSERVATIONS_FOR_PATIENT_LOADED;

  constructor(public payload: any) { }
}
