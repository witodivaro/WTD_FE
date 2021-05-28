import {
  ActionTypes,
  ILoginFailure,
  ILoginRequest,
  ILoginSuccess,
  ISignUpFailure,
  ISignUpRequest,
  ISignUpSuccess,
  ILogout,
  ILogoutSuccess,
} from "./types";

export const loginRequest = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): ILoginRequest => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = (user: string): ILoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { user },
});

export const loginFailure = (errors: any): ILoginFailure => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: { errors },
});

export const signUpRequest = ({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}): ISignUpRequest => ({
  type: ActionTypes.SIGN_UP_REQUEST,
  payload: { email, username, password },
});

export const signUpSuccess = (user: string): ISignUpSuccess => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { user },
});

export const signUpFailure = (errors: any): ISignUpFailure => ({
  type: ActionTypes.SIGN_UP_FAILURE,
  payload: { errors },
});

export const logout = (): ILogout => ({
  type: ActionTypes.LOGOUT,
});

export const logoutSuccess = (): ILogoutSuccess => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});
