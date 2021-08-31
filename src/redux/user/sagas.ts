import { all, call, put, takeLatest } from "@redux-saga/core/effects";

import { verificateEmailSuccess, verificateEmailFailure } from "./actions";

import { ActionTypes, IVerificateEmail } from "./types";

import axios from "../../utils/axios";

function* verificateEmail({ payload }: IVerificateEmail) {
  const { verificationHash } = payload;

  const axiosPayload = {
    verificationHash,
  };

  try {
    yield call(axios.post, "/auth/verificate-email", axiosPayload);

    yield put(verificateEmailSuccess());
  } catch (error) {
    yield put(verificateEmailFailure(error));
  }
}

function* watchVerificateEmailRequest() {
  yield takeLatest(ActionTypes.VERIFICATE_EMAIL_REQUEST, verificateEmail);
}

export function* userSagas() {
  yield all([watchVerificateEmailRequest()]);
}
