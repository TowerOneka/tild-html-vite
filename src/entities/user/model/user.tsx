// import { TokenResponse } from "@/shared/api/auth/types";
// // import { AuthStatus, User } from "@/shared/api/models";
// import { isValidJson } from "@/shared/libs/isValidJson";
// // import { AuthStatus, User } from "@/";
// import { createContext, useMemo, useState, useCallback, useEffect } from "react";

// import { auth } from "@/shared/api";
// import { SignInRequest, SignInResponse, SignUpRequest, signIn } from "@/shared/api/auth/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sliceName } from "./constants";
import { loginThunk, logoutThunk, refreshTokenThunk, signUpThunk } from "./thunks";
import { AuthStatus, UserState } from "./types";

const initialState: UserState = {
  user: null,
  authStatus: "init",
};

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setAuthStatus: (state, { payload }: PayloadAction<AuthStatus>) => {
      state.authStatus = payload;
    },

    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(refreshTokenThunk.fulfilled, (state, { payload }) => {});

    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      state.authStatus = "authorized";
    });

    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user;

      state.authStatus = "authorized";
    });

    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.user = null;
      state.authStatus = "unauthorized";
    });
  },
});

export const { actions: userActions } = userSlice;

export default userSlice.reducer;

// export type AuthState = {
//   // user: User | null;
//   // authStatus: AuthStatus;
//   // token: accessToken | null;
//   refresh: () => void;
//   signUp: (value: SignUpRequest) => Promise<void>;
//   login: (value: Omit<SignInRequest, "fingerprint">) => Promise<void>;
//   logout: () => void;
// };

// type Props = {
//   children: React.ReactNode;
// };

// export const AuthContext = createContext({} as AuthState);

// const AuthProvider = ({ children }: Props) => {
//   // const [user, setUser] = useState<User | null>(null);
//   // const [authStatus, setAuthStatus] = useState<AuthStatus>("initial");

//   useEffect(() => {
//     const tokenFromStorage = localStorage.getItem("token");

//     if (tokenFromStorage && isValidJson(tokenFromStorage)) {
//       // setAuthStatus("authorized");
//     }
//   }, []);

//   const logoutHandler = () => {
//     // setToken(null);
//     localStorage.removeItem("token");
//     // setAuthStatus("unauthorized");
//   };

//   const loginTokenHandler = useCallback((data: SignInResponse) => {
//     const { accessToken } = data.token;

//     setUser(data.user);

//     setAuthStatus("authorized");
//   }, []);

//   const setTokenHandler = useCallback((data: TokenResponse) => {
//     const { accessToken } = data;

//     setAuthStatus("authorized");

//     localStorage.setItem("token", JSON.stringify(accessToken));
//   }, []);

//   const loginCallback = useCallback(
//     async (args: Omit<SignInRequest, "fingerprint">) => {
//       // const fp = await FingerprintJS.load();
//       // const { visitorId: fingerprint } = await fp.get();
//       // const { data } = await auth.api.signIn({ ...args, fingerprint });
//       // loginTokenHandler(data);
//     },
//     [loginTokenHandler],
//   );

// const signUpHanlder = useCallback(
//   async (args: SignUpRequest) => {
//     loginCallback({
//       email: data.email,
//       password: args.password,
//     });
//   },
//   [loginCallback],
// );

// const refreshTokenCallback = useCallback(async () => {}, [setTokenHandler]);

// useEffect(() => {
//   if (localStorage.getItem("token")) {
//     refreshTokenCallback();
//   } else {
//     setAuthStatus("unauthorized");
//   }
// }, [refreshTokenCallback]);

// const store: AuthState = useMemo(
//   () => ({
//     user,
//     authStatus,
//     // setAuthStatus,
//     // token,
//     setUser,
//     login: loginCallback,
//     signUp: signUpHanlder,
//     refresh: refreshTokenCallback,
//     logout: logoutHandler,
//   }),
//   [authStatus, loginCallback, refreshTokenCallback, signUpHanlder, user],
// );

// return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
// };
