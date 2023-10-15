import axios, { AxiosRequestConfig } from "axios";
// import { useLogout } from "./forceLogout";
import { TokenResponse } from "../api/auth/types";
import { forceLogout } from "./forceLogout";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const axiosWithAuth = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosWithAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

// axiosWithAuth.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     const originalRequest = error.config;

//     const fingerprint = sessionStorage.getItem("fingerprint");

//     if (!fingerprint) {
//       // useLogout();

//       return;
//     }

//     if (error.config && fingerprint && !error.config._isRetry) {
//       originalRequest.__isRetry = true;
//       try {
//         const response = await request<TokenResponse>(Methods.POST, {
//           url: "user/refresh",
//           data: {
//             fingerprint,
//           },
//         });

//         localStorage.setItem("token", response.data.accessToken);

//         return axiosWithAuth.request(originalRequest);
//       } catch (error) {
//         forceLogout();
//         return error;
//       }
//     }

//     throw error;
//   },
// );

export const requestWithAuth = <T>(method: Methods, { headers: optsHeader, ...opts }: AxiosRequestConfig) => {
  return axiosWithAuth.request<T>({
    ...opts,
    method,
  });
};

export const request = <T>(method: Methods, opts: AxiosRequestConfig) => {
  return axios.request<T>({
    ...opts,
    method,
    baseURL: import.meta.env.VITE_BASE_URL,
  });
};

export const externalRequest = <T>(externalUrl: string, opts: AxiosRequestConfig) =>
  axios.request<T>({ url: externalUrl, ...opts });
