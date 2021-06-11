import { call, put, takeLatest, all } from "@redux-saga/core/effects";

import axios from "../../utils/axios";
import { setUser } from "../user/actions";
import {
  checkAccessTokenFailure,
  checkAccessTokenSuccess,
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
  refreshTokensRequest,
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
    const { data } = yield call(axios.post, "/user/login", axiosPayload);

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
    const { data } = yield call(axios.post, "/user/sign-up", axiosPayload);

    const { user } = data;

    yield put(signUpSuccess());
    yield put(setUser(user));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* checkAccessToken() {
  try {
    yield call(axios.post, "/user/check-access-token");

    yield put(checkAccessTokenSuccess());
  } catch (error) {
    if (!error.isTokenExpired) {
      yield put(checkAccessTokenFailure(error));
    }
  }
}

function* refreshTokens() {
  try {
    yield call(axios.post, "/user/refresh-token");

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
