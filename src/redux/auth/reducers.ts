import { ActionTypes, AuthState } from "./types";

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
};

export const authReducer = (
  state: AuthState = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        isLoading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        isAuthenticated: true,
        isLoading: false,
      };

    case ActionTypes.LOGOUT:
      return {
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
