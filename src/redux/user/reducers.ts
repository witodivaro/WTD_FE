import { ActionTypes, UserState } from "./types";

const initialState: UserState = {
  user: null,
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

    default:
      return state;
  }
};
