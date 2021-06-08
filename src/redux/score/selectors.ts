import { createSelector } from "reselect";

import { State } from "../../types/redux/store";

export const selectScoreState = (state: State) => state.score;

export const selectTopUsers = createSelector(
  selectScoreState,
  (state) => state.topUsers
);
