export interface AuthState {
    auth: boolean;
    loginToken: string;
    loading: boolean;
  }

  export const initialState: AuthState =  {
    auth: false,
    loginToken: '',
    loading: false
  }