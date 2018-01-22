import { UserSignedInAction } from "./user.action";
import { USER_SIGNED_IN, LOG_OUT_USER } from "./user.action";

import { Action } from '@ngrx/store';

export interface State {
  name: string;
  id: number;
}

export const initialState: State = {
  name: "Some ngrx user",
  id: 5
}

export function reducer(state: any, action: any): any {
  switch (action.type) {
    case USER_SIGNED_IN: {
      console.log("user reducer sign in");
      return action.payload;
    }
    case LOG_OUT_USER: {
      console.log("user reducer log out");
      return Object.assign({}, initialState);
    }
    default: {
      return state;
    }
  }
}

