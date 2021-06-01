import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

export const selectAuthState = (state: State) => state.user;

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectUserRole = createSelector(selectUser, (user) => user?.role);
