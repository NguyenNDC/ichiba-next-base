import { Store, AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Router from 'next/router';
import { BASE_URL } from 'src/config/env';
import { addToken } from 'src/store/slide/app';
import { AppState } from 'src/store/store';

const URL = BASE_URL;

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
});

export default instance;

let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const setInterceptors = (store: Store<any, AnyAction>) => {
  const state: AppState = store.getState();
  const dispatch = store.dispatch;
  const token = state.app.auth;

  instance.interceptors.request.use(
    (config) => {
      if (token && config.headers) {
        config.headers['Authorization'] = 'Bearer ' + token.accesstoken;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;

      if (
        error.response.status === 401 &&
        originalRequest.url === `${URL}/auth/token`
      ) {
        Router.push('/login');
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return axios(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }
        originalRequest._retry = true;
        const refreshToken = token.refreshToken;

        return new Promise(function (resolve, reject) {
          axios
            .post('/fooUrl/refreshToken', {
              refreshToken: refreshToken,
            })
            .then(({ data }) => {
              dispatch(addToken(data));
              axios.defaults.headers.common['Authorization'] =
                'Bearer ' + data.fooToken;
              originalRequest.headers['Authorization'] =
                'Bearer ' + data.fooToken;
              processQueue(null, data.fooToken);
              resolve(axios(originalRequest));
            })
            .catch((err) => {
              processQueue(err, null);
              //store.dispatch(showMessage({ message: 'Expired Token' }));

              reject(err);
            })
            .then(() => {
              isRefreshing = false;
            });
        });
      }
      return Promise.reject(error);
    }
  );
};
