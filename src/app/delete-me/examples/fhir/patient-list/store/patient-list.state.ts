export interface Patient {
  address: [
    { city: string, state: string }
  ];
  name: [{given: string[], family: string}];
  identifier: [{value: number}];
  birthDate: string,
  gender: string,
}

export interface State {
  patients: Patient[];
} 

export const initialState: State = {
} as State;
