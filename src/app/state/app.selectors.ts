import * as fromCounter from '../delete-me/examples/counter/state/counter.reducer';
import * as fromStarWars from '../delete-me/examples/data-dependency-chain/state/starwars.reducer';
import { COUNTER } from '../delete-me/examples/counter/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STAR_WARS } from '../delete-me/examples/data-dependency-chain/state/starwars.actions';


/***
 * COUNTER SELECTORS
 *
 * @type {MemoizedSelector<object, State>}
 */
export const getCounterState = createFeatureSelector<fromCounter.State>(COUNTER);
export const getCurrentCount = createSelector(getCounterState, fromCounter.getCurrentCount);


export const getStarWarsState = createFeatureSelector<fromStarWars.State>(STAR_WARS);
export const getStarWars = createSelector(getStarWarsState, fromStarWars.getStarWarsState);
export const getStarShips = createSelector(getStarWarsState, fromStarWars.getStarShips);
