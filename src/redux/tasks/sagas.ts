import axios from "../../utils/axios";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  ActionTypes,
  createTaskFailure,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  fetchTasksFailure,
  fetchTasksSuccess,
  request,
  updateTaskFailure,
  updateTaskSuccess,
  changeTaskArchivedFailure,
  changeTaskArchivedSuccess,
} from "./actions";

import {
  createTaskRequestAction,
  updateTaskRequestAction,
  deleteTaskRequestAction,
  changeTaskArchivedAction,
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

function* deleteTask({ payload }: deleteTaskRequestAction) {
  const { id } = payload;

  try {
    yield put(request());

    yield call(axios.delete, `/tasks/${id}`);

    yield put(deleteTaskSuccess(id));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}

function* changeTaskArchived({ payload }: changeTaskArchivedAction) {
  const { id, isArchived } = payload;

  const axiosBody = {
    id,
    isArchived,
  };

  try {
    yield put(request());

    const { data } = yield call(
      axios.patch,
      `/tasks/archived/${id}`,
      axiosBody
    );

    yield put(changeTaskArchivedSuccess(data));
  } catch (error) {
    yield put(changeTaskArchivedFailure(error));
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

function* watchChangeTaskArchivedRequest() {
  yield takeLatest(
    ActionTypes.CHANGE_TASK_ARCHIVED_REQUEST,
    changeTaskArchived
  );
}

function* watchDeleteTaskRequest() {
  yield takeEvery(ActionTypes.DELETE_TASK_REQUEST, deleteTask);
}

export function* tasksSagas() {
  yield all([
    watchFetchTasksRequest(),
    watchCreateTaskRequest(),
    watchUpdateTaskRequest(),
    watchDeleteTaskRequest(),
    watchChangeTaskArchivedRequest(),
  ]);
}
