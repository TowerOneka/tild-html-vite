import axios, { AxiosRequestConfig } from "axios";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

const axiosWithAuth = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosWithAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});

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
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });
};

export const externalRequest = <T>(externalUrl: string, opts: AxiosRequestConfig) =>
  axios.request<T>({ url: externalUrl, ...opts });
