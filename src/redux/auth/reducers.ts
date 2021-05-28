import { ActionTypes, AuthState } from "./types";

const initialState: AuthState = {};

export const authReducer = (
  state: AuthState = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    default:
      return state;
  }
};
