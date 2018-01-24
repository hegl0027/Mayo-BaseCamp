export interface Patient {
  name: string;
  birthdate: string;
  age: number;
  mrn: number;
}

export interface State {
  patients: Patient[];
} 

export const initialState: State = {
} as State;