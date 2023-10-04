import axios, { AxiosRequestConfig } from "axios";
// import { getCookie } from "cookies-next";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const requestWithAuth = <T>(method: Methods, { headers: optsHeader, ...opts }: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  const headers = {
    ...optsHeader,
    Authorization: `Bearer ${token}`,
  };

  return axios.request<T>({
    ...opts,
    headers,
    method,
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
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
