import { Params, RouterStateSnapshot } from '@angular/router';

import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

export interface State {
  url: string;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<State> {
  serialize(routerState: RouterStateSnapshot): State {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

export const initialState: any = {
  state: {
    url: (window.location.pathname || '/'),
    queryParams: null
  }
}

