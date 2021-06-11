import { ActionTypes, AuthState, RESET_STORE } from "./types";

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  isCheckingAuth: true,
  error: null,
};

export const authReducer = (
  state: AuthState = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };

    case ActionTypes.CHECK_ACCESS_TOKEN_REQUEST:
      return {
        ...state,
        isCheckingAuth: true,
      };

    case ActionTypes.REFRESH_TOKENS_SUCCESS:
    case ActionTypes.CHECK_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: true,
      };

    case ActionTypes.REFRESH_TOKENS_FAILURE:
    case ActionTypes.CHECK_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        isCheckingAuth: false,
        isAuthenticated: false,
      };

    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    case RESET_STORE:
      return { ...initialState, isCheckingAuth: false };

    default:
      return state;
  }
};
