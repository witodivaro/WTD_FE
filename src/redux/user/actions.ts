import { ActionTypes, ISetUser, User } from "./types";

export const setUser = (user: User): ISetUser => ({
  type: ActionTypes.SET_USER,
  payload: { user },
});
