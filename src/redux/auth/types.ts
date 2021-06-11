const prefix = "@@auth";

export const ActionTypes = {
  LOGIN_REQUEST: `${prefix}/LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${prefix}/LOGIN_SUCCESS`,
  LOGIN_FAILURE: `${prefix}/LOGIN_FAILURE`,

  SIGN_UP_REQUEST: `${prefix}/SIGN_UP_REQUEST`,
  SIGN_UP_SUCCESS: `${prefix}/SIGN_UP_SUCCESS`,
  SIGN_UP_FAILURE: `${prefix}/SIGN_UP_FAILURE`,

  LOGOUT: `${prefix}/LOGOUT`,
  LOGOUT_SUCCESS: `${prefix}/LOGOUT_SUCCESS`,

  CHECK_ACCESS_TOKEN_REQUEST: `${prefix}/CHECK_ACCESS_TOKEN_REQUEST`,
  CHECK_ACCESS_TOKEN_SUCCESS: `${prefix}/CHECK_ACCESS_TOKEN_SUCCESS`,
  CHECK_ACCESS_TOKEN_FAILURE: `${prefix}/CHECK_ACCESS_TOKEN_FAILURE`,

  REFRESH_TOKENS_REQUEST: `${prefix}/REFRESH_TOKENS_REQUEST`,
  REFRESH_TOKENS_SUCCESS: `${prefix}/REFRESH_TOKENS_SUCCESS`,
  REFRESH_TOKENS_FAILURE: `${prefix}/REFRESH_TOKENS_FAILURE`,
};

export const RESET_STORE = "RESET_STORE";

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  error: any;
}

export interface ILoginRequest {
  type: string;
  payload: {
    username: string;
    password: string;
  };
}

export interface ILoginSuccess {
  type: string;
}

export interface ILoginFailure {
  type: string;
  payload: {
    errors: any;
  };
}

export interface ISignUpRequest {
  type: string;
  payload: {
    email: string;
    username: string;
    password: string;
  };
}

export interface ISignUpSuccess {
  type: string;
}

export interface ISignUpFailure {
  type: string;
  payload: {
    error: any;
  };
}

export interface ILogout {
  type: string;
}

export interface ILogoutSuccess {
  type: string;
}
