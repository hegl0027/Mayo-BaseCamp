import { CONDITIONS_FOR_PATIENT_LOADED } from "./patient-conditions.actions";

import { Action } from '@ngrx/store';

export const initialState: any = [] 

export function reducer(state: any, action: any): any {
  switch (action.type) {
    case CONDITIONS_FOR_PATIENT_LOADED: {
      console.log(action.payload);
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
