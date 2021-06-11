import axios from "axios";

import { logout, refreshTokensRequest } from "../redux/auth/actions";
import { store } from "../redux/store";

const instance = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response || {};

    if (status === 401) {
      err.isTokenExpired = true;
      store.dispatch(refreshTokensRequest());
    }

    if (status === 403) {
      store.dispatch(logout());
    }

    return Promise.reject(err);
  }
);

export default instance;
