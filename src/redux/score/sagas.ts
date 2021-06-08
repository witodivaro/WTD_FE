import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import axios from "../../utils/axios";
import socket from "../../utils/socket";
import { ActionTypes, SocketEvents, TopUser, UserInfo } from "../score/types";
import { fetchTopUsersFailure, fetchTopUsersSuccess } from "./actions";

import { store } from "../store";

function* fetchTopUsers() {
  try {
    const { data }: AxiosResponse<UserInfo[]> = yield call(
      axios.get,
      "/tasks/top"
    );

    const topUsers: TopUser[] = data.map(
      ({ tasksCount, user: { username } }: UserInfo) => ({
        tasksCount: Number(tasksCount),
        username,
      })
    );

    yield put(fetchTopUsersSuccess(topUsers));
  } catch (error) {
    yield put(fetchTopUsersFailure(error));
  }
}

function* watchFetchTopUsersRequest() {
  yield takeLatest(ActionTypes.FETCH_TOP_USERS_REQUEST, fetchTopUsers);
}

socket.on(SocketEvents.updated, (topUsers) => {
  store.dispatch(fetchTopUsersSuccess(topUsers));
});

export function* scoreSagas() {
  yield all([watchFetchTopUsersRequest()]);
}
