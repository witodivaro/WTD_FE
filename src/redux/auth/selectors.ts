import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

export const selectAuthState = (state: State) => state.auth;

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (state) => state.accessToken
);

export const selectIsCheckingAuth = createSelector(
  selectAuthState,
  (state) => state.isCheckingAuth
);
