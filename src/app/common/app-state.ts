import { Params, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';

import * as counter from './counter';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface AppState {
  count: counter.State;
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

const initialRouterState: any = {
  state: {
    url: window.location.pathname,
    queryParams: null
  }
}

export const initialState: AppState = {
  count: counter.initialState,
  routerReducer: initialRouterState 
}

export const reducers: ActionReducerMap<AppState> = {
  count: counter.counterReducer,
  routerReducer
}

export const getCountValue = (s: AppState) => s.count.value;
export const getRoute = (s: AppState) => s.routerReducer.state.url;
