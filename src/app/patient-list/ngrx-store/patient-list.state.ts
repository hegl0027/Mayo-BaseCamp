export interface Patient {
  _updated: string;
  resource: {
    name: [{given: string[], family: string}];
    identifier: [{value: number}];
    birthDate: string,
    gender: string,
  },
  age: number
}

export interface State {
  patients: Patient[];
} 

export const initialState: State = {
} as State;
