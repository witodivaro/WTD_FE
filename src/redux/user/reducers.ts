import { RESET_STORE } from "../auth/types";
import { ActionTypes, UserState } from "./types";

const initialState: UserState = {
  user: null,
  isEmailVerificationSuccess: false,
  isLoading: false,
  errors: null,
};

export const userReducer = (
  state: UserState = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: payload.user,
      };

    case ActionTypes.VERIFICATE_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.VERIFICATE_EMAIL_SUCCESS:
      return {
        ...state,
        isEmailVerificationSuccess: true,
        isLoading: false,
      };

    case ActionTypes.VERIFICATE_EMAIL_FAILURE:
      return {
        ...state,
        isEmailVerificationSuccess: false,
        isLoading: false,
        errors: payload.errors,
      };

    case RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
