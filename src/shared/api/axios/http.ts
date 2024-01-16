import axios from "axios";

import { getResponseData, getResponseError } from "./lib";

class Http {
  private _axios;
  private _apiUrl =
    process.env.API ||
    `${window.location.protocol}//api.${window.location.hostname}/api`;

  constructor() {
    this._axios = axios.create({
      baseURL: this._apiUrl,
      withCredentials: true,
    });

    this._axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    this._axios.interceptors.response.use(
      function (response) {
        return getResponseData(response);
      },
      function (error) {
        return Promise.reject(getResponseError(error));
      }
    );
  }

  async post<R = unknown, B = unknown>(url: string, body: B): Promise<R> {
    try {
      return await this._axios.post<B, R>(url, body);
    } catch (e) {
      throw e;
    }
  }

  async patch<R = unknown, B = unknown>(url: string, body: B): Promise<R> {
    try {
      return await this._axios.patch<B, R>(url, body);
    } catch (e) {
      throw e;
    }
  }

  async get<R = unknown, B = unknown>(url: string): Promise<R> {
    try {
      return await this._axios.get<B, R>(url);
    } catch (e) {
      throw e;
    }
  }
}

export const http = new Http();
