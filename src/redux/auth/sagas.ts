import { call, put, takeLatest, all } from "@redux-saga/core/effects";

import axios, { setAuthToken } from "../../utils/axios";
import { setUser } from "../user/actions";
import {
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
} from "./actions";
import {
  ActionTypes,
  ILoginRequest,
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

    setAuthToken(token);
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

    setAuthToken(token);

    yield put(signUpSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* logout() {
  yield put({ type: RESET_STORE });
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

export function* authSagas() {
  yield all([watchLoginRequest(), watchSignUpRequest(), watchLogout()]);
}
