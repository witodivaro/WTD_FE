import { ActionTypes, ISetUser, User } from "./types";

export const setUser = (user: User | null): ISetUser => ({
  type: ActionTypes.SET_USER,
  payload: { user },
});
