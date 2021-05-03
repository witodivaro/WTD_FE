import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";

import { tasksReducer } from "./tasks/reducers";
import { tasksSagas } from "./tasks/sagas";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export function* rootSaga() {
  yield all([tasksSagas()]);
}
