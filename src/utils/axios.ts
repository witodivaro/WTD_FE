import axios, { AxiosInstance } from "axios";

import { logout, refreshTokensRequest } from "../redux/auth/actions";
import { store } from "../redux/store";

const REFRESH_TOKEN_URL = "/user/refresh-token";

const instance = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    const { status } = err.response || {};

    if (status === 403) {
      store.dispatch(logout());
    }

    return Promise.reject(err);
  }
);

let tokensRefreshed = true;

const axiosProxy = new Proxy(instance, {
  get: (obj: AxiosInstance, prop: keyof AxiosInstance) => {
    if (typeof obj[prop] !== "function") return obj[prop];

    return async (...args: any[]) => {
      try {
        const response = await (obj[prop] as Function).apply(obj, args);

        if (response.config.url === REFRESH_TOKEN_URL) {
          tokensRefreshed = true;
        }

        return response;
      } catch (error) {
        if (error.response?.status === 401) {
          tokensRefreshed = false;

          error.isTokenExpired = true;
          store.dispatch(refreshTokensRequest());

          return new Promise((resolve, reject) => {
            const check = async () => {
              if (tokensRefreshed) {
                try {
                  const response = await (obj[prop] as Function).apply(
                    obj,
                    args
                  );
                  resolve(response);
                } catch (error) {
                  reject(error);
                }
                return;
              }

              setTimeout(check, 100);
            };

            check();
          });
        } else {
          return error;
        }
      }
    };
  },
});

export default axiosProxy;
