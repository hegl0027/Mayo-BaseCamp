import { UserSignedInAction } from "./user.action";
import { USER_SIGNED_IN, LOG_OUT_USER } from "./user.action";

import { Action } from '@ngrx/store';

export interface State {
  name: string;
  id: number;
  isLoggedIn: boolean;
}

export const initialState: State = {
  name: "Not Logged In",
  id: 0,
  isLoggedIn: false
}

export function reducer(state: any, action: any): any {
  switch (action.type) {
    case USER_SIGNED_IN: {
      return action.payload;
    }
    case LOG_OUT_USER: {
      return Object.assign({}, initialState);
    }
    default: {
      return state;
    }
  }
}

