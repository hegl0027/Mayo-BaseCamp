import { Action } from '@ngrx/store';

export const COUNTER = '[COUNTER]';
export const INCREMENT_COUNTER = `${COUNTER} :: Increment`;
export const DECREMENT_COUNTER = `${COUNTER} :: Decrement`;
export const RESET_COUNTER = `${COUNTER} :: Reset`;

export class IncrementAction implements Action {
  readonly type: string = INCREMENT_COUNTER;

  public constructor(public payload: number) {
  }
}

export class DecrementAction implements Action {
  readonly type: string = DECREMENT_COUNTER;

  public constructor(public payload: number) {
  }
}

export class ResetCounterAction implements Action {
  readonly type: string = RESET_COUNTER;

  public constructor() {
  }
}

export type CounterAction =
  IncrementAction | DecrementAction | ResetCounterAction;
