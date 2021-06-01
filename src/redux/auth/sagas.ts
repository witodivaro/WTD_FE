import { call, put, takeLatest, all } from "@redux-saga/core/effects";
import axios from "axios";
import {
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
} from "./actions";
import { ActionTypes, ILoginRequest, ISignUpRequest } from "./types";

function* login({ payload }: ILoginRequest) {
  const { username, password } = payload;

  try {
    const { data } = yield call(axios.post, "/");

    yield put(loginSuccess(""));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* signUp({ payload }: ISignUpRequest) {
  console.log(1);
  const { email, password, username } = payload;

  try {
    const { data } = yield call(axios.post, "/");

    console.log(data);

    yield put(signUpSuccess(""));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* watchLoginRequest() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
}

function* watchSignUpRequest() {
  yield takeLatest(ActionTypes.SIGN_UP_REQUEST, signUp);
}

export function* authSagas() {
  yield all([watchLoginRequest(), watchSignUpRequest()]);
}
