import { ActionTypes, ISetUser, IVerificateEmail, User } from "./types";

export const setUser = (user: User | null): ISetUser => ({
  type: ActionTypes.SET_USER,
  payload: { user },
});

export const verificateEmailRequest = (
  verificationHash: string
): IVerificateEmail => ({
  type: ActionTypes.VERIFICATE_EMAIL_REQUEST,
  payload: { verificationHash },
});

export const verificateEmailSuccess = () => ({
  type: ActionTypes.VERIFICATE_EMAIL_SUCCESS,
});

export const verificateEmailFailure = (error: any) => ({
  type: ActionTypes.VERIFICATE_EMAIL_FAILURE,
  payload: { error },
});
