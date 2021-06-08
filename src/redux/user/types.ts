const prefix = "@@user";

export const ActionTypes = {
  SET_USER: `${prefix}/SET_USER`,

  VERIFICATE_EMAIL_REQUEST: `${prefix}/VERIFICATE_EMAIL_REQUEST`,
  VERIFICATE_EMAIL_SUCCESS: `${prefix}/VERIFICATE_EMAIL_SUCCESS`,
  VERIFICATE_EMAIL_FAILURE: `${prefix}/VERIFICATE_EMAIL_FAILURE`,
};

export interface User {
  username: string;
  email: string;
  role: string;
}

export interface UserState {
  user: User | null;
  isEmailVerificationSuccess: boolean;
  isLoading: boolean;
  errors: any;
}

export interface ISetUser {
  type: string;
  payload: {
    user: User | null;
  };
}

export interface IVerificateEmail {
  type: string;
  payload: {
    verificationHash: string;
  };
}
