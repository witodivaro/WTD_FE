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

export const loginSuccess = (): ILoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS,
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

export const signUpSuccess = (): ISignUpSuccess => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error: any): ISignUpFailure => ({
  type: ActionTypes.SIGN_UP_FAILURE,
  payload: { error },
});

export const checkAccessToken = () => ({
  type: ActionTypes.CHECK_ACCESS_TOKEN_REQUEST,
});

export const checkAccessTokenSuccess = () => ({
  type: ActionTypes.CHECK_ACCESS_TOKEN_SUCCESS,
});

export const checkAccessTokenFailure = (error: any) => ({
  type: ActionTypes.CHECK_ACCESS_TOKEN_FAILURE,
  payload: { error },
});

export const refreshTokensRequest = () => ({
  type: ActionTypes.REFRESH_TOKENS_REQUEST,
});

export const refreshTokensSuccess = () => ({
  type: ActionTypes.REFRESH_TOKENS_SUCCESS,
});

export const refreshTokensFailure = (error: any) => ({
  type: ActionTypes.REFRESH_TOKENS_FAILURE,
  payload: { error },
});

export const logout = (): ILogout => ({
  type: ActionTypes.LOGOUT,
});

export const logoutSuccess = (): ILogoutSuccess => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});
