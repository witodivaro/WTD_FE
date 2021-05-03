import axios from "../../utils/axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  ActionTypes,
  createTaskFailure,
  createTaskSuccess,
  fetchTasksFailure,
  fetchTasksSuccess,
  request,
  updateTaskFailure,
  updateTaskSuccess,
} from "./actions";

import {
  createTaskRequestAction,
  updateTaskRequestAction,
} from "../../types/redux/tasks";

function* fetchTasks() {
  try {
    yield put(request());

    const { data } = yield call(axios.get, "/tasks");

    yield put(fetchTasksSuccess(data));
  } catch (error) {
    yield put(fetchTasksFailure(error));
  }
}

function* createTask({ payload }: createTaskRequestAction) {
  const { task } = payload;

  try {
    yield put(request());

    const { data } = yield call(axios.post, "/tasks", task);

    yield put(createTaskSuccess(data));
  } catch (error) {
    yield put(createTaskFailure(error));
  }
}

function* updateTask({ payload }: updateTaskRequestAction) {
  const { id, task } = payload;

  try {
    yield put(request());

    const { data } = yield call(axios.patch, `/tasks/${id}`, task);

    yield put(updateTaskSuccess(data));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

function* watchFetchTasksRequest() {
  yield takeLatest(ActionTypes.FETCH_TASKS_REQUEST, fetchTasks);
}

function* watchCreateTaskRequest() {
  yield takeLatest(ActionTypes.CREATE_TASK_REQUEST, createTask);
}

function* watchUpdateTaskRequest() {
  yield takeLatest(ActionTypes.UPDATE_TASK_REQUEST, updateTask);
}

export function* tasksSagas() {
  yield all([
    watchFetchTasksRequest(),
    watchCreateTaskRequest(),
    watchUpdateTaskRequest(),
  ]);
}
