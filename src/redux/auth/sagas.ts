import { call, put, takeLatest, all } from "@redux-saga/core/effects";

import axios from "../../utils/axios";
import socket from "../../utils/socket";
import { getCookies } from "../../utils/utils";
import { setUser } from "../user/actions";
import {
  checkAccessTokenFailure,
  checkAccessTokenSuccess,
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
  refreshTokensFailure,
  refreshTokensSuccess,
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
    const { data } = yield call(axios.post, "/auth/login", axiosPayload);

    const { user } = data;

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
    const { data } = yield call(axios.post, "/auth/sign-up", axiosPayload);

    const { user } = data;

    yield put(signUpSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* checkAccessToken() {
  try {
    yield call(axios.post, "/auth/check-access-token");

    const { _csrf } = getCookies();
    socket.connect(_csrf);

    yield put(checkAccessTokenSuccess());
  } catch (error: any) {
    if (!error.isTokenExpired) {
      yield put(checkAccessTokenFailure(error));
    }
  }
}

function* refreshTokens() {
  try {
    yield call(axios.post, "/auth/refresh-token");

    yield put(refreshTokensSuccess());
  } catch (error) {
    yield put(refreshTokensFailure(error));
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

function* watchCheckAccessTokenRequest() {
  yield takeLatest(ActionTypes.CHECK_ACCESS_TOKEN_REQUEST, checkAccessToken);
}
function* watchRefreshTokens() {
  yield takeLatest(ActionTypes.REFRESH_TOKENS_REQUEST, refreshTokens);
}

function* watchLogout() {
  yield takeLatest(ActionTypes.LOGOUT, logout);
}

export function* authSagas() {
  yield all([
    watchLoginRequest(),
    watchSignUpRequest(),
    watchCheckAccessTokenRequest(),
    watchRefreshTokens(),
    watchLogout(),
  ]);
}
