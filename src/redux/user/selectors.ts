import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

export const selectUserState = (state: State) => state.user;

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);

export const selectUserRole = createSelector(selectUser, (user) => user?.role);

export const selectIsEmailVerificationSuccess = createSelector(
  selectUserState,
  (state) => state.isEmailVerificationSuccess
);

export const selectUserErrors = createSelector(
  selectUserState,
  (state) => state.errors
);

export const selectIsLoading = createSelector(
  selectUserState,
  (state) => state.isLoading
);
