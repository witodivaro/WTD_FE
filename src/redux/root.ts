import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";

import { tasksReducer, tasksSagas } from "./tasks";
import { authSagas, authReducer } from "./auth";
import { userSagas, userReducer } from "./user";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: authReducer,
  user: userReducer,
});

export function* rootSaga() {
  yield all([tasksSagas(), authSagas(), userSagas()]);
}
