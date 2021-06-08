import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { ActionTypes, AuthState, RESET_STORE } from "./types";

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  accessToken: "",
  isCheckingAuth: true,
};

const authReducer = (
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

    case ActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };

    case ActionTypes.CHECK_AUTH:
      return {
        ...state,
        isCheckingAuth: true,
      };

    case ActionTypes.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isCheckingAuth: false,
      };

    case ActionTypes.CHECK_AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isCheckingAuth: false,
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

export const persistedAuthReducer = persistReducer(
  {
    key: "accessToken",
    whitelist: ["accessToken"],
    storage,
  },
  authReducer
);
