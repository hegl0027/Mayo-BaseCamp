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
