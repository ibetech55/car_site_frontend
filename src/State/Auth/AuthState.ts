export interface AuthState {
    auth: boolean;
    loginToken: string;
    loading: boolean;
    loginError: string;
  }

  export const initialState: AuthState =  {
    auth: false,
    loginToken: '',
    loading: false,
    loginError: ''
  }