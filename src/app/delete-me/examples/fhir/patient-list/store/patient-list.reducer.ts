import { PATIENT_LIST_LOADED } from "./patient-list.actions";

import { Action } from '@ngrx/store';

export function reducer(state: any, action: any): any {
  switch (action.type) {
    case PATIENT_LIST_LOADED: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
