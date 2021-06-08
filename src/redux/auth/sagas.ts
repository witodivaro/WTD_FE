import { call, put, takeLatest, all, select } from "@redux-saga/core/effects";

import axios, { setAuthToken } from "../../utils/axios";
import { setUser } from "../user/actions";
import {
  checkAuthFailure,
  checkAuthSuccess,
  loginFailure,
  loginSuccess,
  setAccessToken,
  signUpFailure,
  signUpSuccess,
} from "./actions";
import { selectAccessToken } from "./selectors";
import {
  ActionTypes,
  ILoginRequest,
  ISetAccessToken,
  ISignUpRequest,
  RESET_STORE,
} from "./types";

function* login({ payload }: ILoginRequest) {
  const { username, password } = payload;

  const axiosPayload = {
    username,
    password,
  };

  try {
    const { data } = yield call(axios.post, "/user/login", axiosPayload);

    const { token, user } = data;

    yield put(setAccessToken(token));
    yield put(loginSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* signUp({ payload }: ISignUpRequest) {
  const { email, password, username } = payload;

  const axiosPayload = {
    email,
    password,
    username,
  };

  try {
    const { data } = yield call(axios.post, "/user/sign-up", axiosPayload);

    const { user, token } = data;

    yield put(setAccessToken(token));
    yield put(signUpSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* logout() {
  yield put({ type: RESET_STORE });
}

function* checkAuth(): Generator<any, any, any> {
  try {
    const token = yield select(selectAccessToken);

    yield call(
      axios.post,
      "/user/check-token",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setAuthToken(token);

    yield put(checkAuthSuccess());
  } catch (error) {
    yield put(checkAuthFailure());
  }
}

function* setToken({ payload }: ISetAccessToken) {
  const { accessToken } = payload;

  yield setAuthToken(accessToken);
}

function* watchLoginRequest() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
}

function* watchSignUpRequest() {
  yield takeLatest(ActionTypes.SIGN_UP_REQUEST, signUp);
}

function* watchLogout() {
  yield takeLatest(ActionTypes.LOGOUT, logout);
}

function* watchCheckAuth() {
  yield takeLatest(ActionTypes.CHECK_AUTH, checkAuth);
}

function* watchSetAccessToken() {
  yield takeLatest(ActionTypes.SET_ACCESS_TOKEN, setToken);
}

export function* authSagas() {
  yield all([
    watchLoginRequest(),
    watchSignUpRequest(),
    watchCheckAuth(),
    watchLogout(),
    watchSetAccessToken(),
  ]);
}
