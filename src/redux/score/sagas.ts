import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import axios from "../../utils/axios";
import { ActionTypes, TopUser, UserInfo } from "../score/types";
import { fetchTopUsersFailure, fetchTopUsersSuccess } from "./actions";

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

export function* scoreSagas() {
  yield all([watchFetchTopUsersRequest()]);
}
