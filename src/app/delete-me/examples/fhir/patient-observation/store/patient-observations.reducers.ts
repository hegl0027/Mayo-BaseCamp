import { OBSERVATIONS_FOR_PATIENT_LOADED } from "./patient-observations.actions";

import { Action } from '@ngrx/store';

export const initialState: any = [] 

export function reducer(state: any, action: any): any {
  switch (action.type) {
    case OBSERVATIONS_FOR_PATIENT_LOADED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
