import { Methods, request } from "@/shared/libs/request";
import { User } from "./models";
import { TokenResponse } from "./types";

export type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};

export type SignUpRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
};

export type SignUpResponse = {
  token: TokenResponse;
  user: User;
};

export type SignInRequest = {
  email: string;
  password: string;
  fingerprint: string;
};

export type SignInResponse = {
  token: TokenResponse;
  user: User;
};

export type RefreshRequest = {
  fingerprint?: string;
};

export const getAllUsers = () =>
  request<User[]>(Methods.GET, {
    url: "/user/getAllUsers",
  });

export const signUp = (data: SignUpRequest) =>
  request<SignUpResponse>(Methods.POST, {
    url: "/user/signup",
    data,
  });

export const signIn = (data: SignInRequest) =>
  request<SignInResponse>(Methods.POST, {
    url: "/auth/login",
    data,
  });

export const refreshToken = (data: RefreshRequest) =>
  request<TokenResponse>(Methods.POST, {
    url: "/auth/refresh",
    data,
  });
