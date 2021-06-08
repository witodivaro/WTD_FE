import { ActionTypes, TopUser } from "./types";

export const fetchTopUsersRequest = () => ({
  type: ActionTypes.FETCH_TOP_USERS_REQUEST,
});

export const fetchTopUsersSuccess = (topUsers: TopUser[]) => ({
  type: ActionTypes.FETCH_TOP_USERS_SUCCESS,
  payload: { topUsers },
});

export const fetchTopUsersFailure = (error: any) => ({
  type: ActionTypes.FETCH_TOP_USERS_FAILURE,
  payload: { error },
});
