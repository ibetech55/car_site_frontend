export interface UserErrors {
  registerUser: string;
}
export interface UserState {
  loading: boolean;
  error: UserErrors;
}

export const initialState: UserState = {
  loading: false,
  error: {
    registerUser: "",
  },
};
