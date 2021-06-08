import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";

import { tasksReducer, tasksSagas } from "./tasks";
import { authSagas, persistedAuthReducer } from "./auth";
import { userSagas, userReducer } from "./user";
import { scoreReducer, scoreSagas } from "./score";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: persistedAuthReducer,
  user: userReducer,
  score: scoreReducer,
});

export function* rootSaga() {
  yield all([tasksSagas(), authSagas(), userSagas(), scoreSagas()]);
}
