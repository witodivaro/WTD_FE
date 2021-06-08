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

  SET_ACCESS_TOKEN: `${prefix}/SET_ACCESS_TOKEN`,

  CHECK_AUTH: `${prefix}/CHECK_AUTH`,
  CHECK_AUTH_SUCCESS: `${prefix}/CHECK_AUTH_SUCCESS`,
  CHECK_AUTH_FAILURE: `${prefix}/CHECK_AUTH_FAILURE`,
};

export const RESET_STORE = "RESET_STORE";

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  accessToken: string;
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
    errors: any;
  };
}

export interface ILogout {
  type: string;
}

export interface ILogoutSuccess {
  type: string;
}

export interface ISetAccessToken {
  type: string;
  payload: {
    accessToken: string;
  };
}
