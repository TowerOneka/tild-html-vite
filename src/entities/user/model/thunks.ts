import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { auth } from "@/shared/api";
import { sliceName } from "./constants";
import { SignInRequest, SignUpRequest } from "@/shared/api/auth/api";

export const refreshTokenThunk = createAsyncThunk(`${sliceName}/refreshToken`, async () => {
  const fp = await FingerprintJS.load();

  const { visitorId: fingerprint } = await fp.get();

  const { data } = await auth.api.refreshToken({ fingerprint });

  sessionStorage.setItem("fingerprint", fingerprint);

  localStorage.setItem("token", JSON.stringify(data.accessToken));
});

export const signUpThunk = createAsyncThunk(`${sliceName}/signUp`, async (payload: SignUpRequest) => {
  const { data: signUpData } = await auth.api.signUp(payload);

  const fp = await FingerprintJS.load();

  const { visitorId: fingerprint } = await fp.get();

  const { data: signInData } = await auth.api.signIn({
    email: signUpData.email,
    password: payload.password,
    fingerprint,
  });

  localStorage.setItem("token", JSON.stringify(signInData.token.accessToken));

  return signInData;
});

export const loginThunk = createAsyncThunk(
  `${sliceName}/signIn`,
  async (payload: Omit<SignInRequest, "fingerprint">) => {
    const fp = await FingerprintJS.load();
    const { visitorId: fingerprint } = await fp.get();
    const { data } = await auth.api.signIn({ ...payload, fingerprint });

    localStorage.setItem("token", JSON.stringify(data.token.accessToken));

    return data;
  },
);

export const logoutThunk = createAsyncThunk(`${sliceName}/signOut`, () => {
  if (localStorage.getItem("token")) localStorage.removeItem("token");

  return true;
});
