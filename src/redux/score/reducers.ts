import { RESET_STORE } from "../auth/types";
import { ActionTypes, ScoreState } from "./types";

const initialState: ScoreState = {
  topUsers: [],
  isLoading: false,
  errors: null,
};

export const scoreReducer = (
  state: ScoreState = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case ActionTypes.FETCH_TOP_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.FETCH_TOP_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        topUsers: payload.topUsers,
      };

    case ActionTypes.FETCH_TOP_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.error,
      };

    case RESET_STORE:
      return initialState;

    default:
      return state;
  }
};
