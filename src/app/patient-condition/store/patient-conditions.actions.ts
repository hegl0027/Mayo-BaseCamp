import { Action } from "@ngrx/store";

export const LOAD_CONDITIONS_FOR_PATIENT: string = "[patient-conditions] Load Conditions for Patient Action";
export const CONDITIONS_FOR_PATIENT_LOADED: string = "[patient-conditions] Patient Conditions Loaded";

export class LoadConditionsForPatientAction implements Action {
  readonly type: string = LOAD_CONDITIONS_FOR_PATIENT;
  constructor(public payload: string) { }
}

export class ConditionsForPatientLoadedAction implements Action {
  readonly type: string = CONDITIONS_FOR_PATIENT_LOADED;

  constructor(public payload: any) { }
}
