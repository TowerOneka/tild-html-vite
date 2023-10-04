import { TokenResponse } from "@/shared/api/auth/types";
import { AuthStatus, User } from "@/shared/api/models";
import { isValidJson } from "@/shared/libs/isValidJson";
// import { AuthStatus, User } from "@/";
import { createContext, useMemo, useState, useCallback, useEffect } from "react";

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { auth } from "@/shared/api";
import { SignInRequest, SignInResponse } from "@/shared/api/auth/api";

type TokenState = {
  accessToken: string;
  expireAt: string;
};

export type AuthState = {
  user: User | null;
  authStatus: AuthStatus;
  token: TokenState | null;
  refresh: () => void;
  login: (value: Omit<SignInRequest, "fingerprint">) => void;
  logout: () => void;
};

type Props = {
  children: React.ReactNode;
};

const calcTimeRemaining = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpireTime = new Date(expirationTime).getTime();
  const remaingDuration = adjExpireTime - currentTime;

  return remaingDuration;
};

export const AuthContext = createContext({} as AuthState);

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<TokenState | null>(null);

  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("initial");

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");

    if (tokenFromStorage && isValidJson(tokenFromStorage)) {
      const { refreshToken: _, ...serializedToken } = JSON.parse(tokenFromStorage);
      setToken(serializedToken);
      setAuthStatus("authorized");
    }
  }, []);

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setAuthStatus("unauthorized");
  };

  const loginTokenHandler = useCallback((data: SignInResponse) => {
    const { refreshToken: _, ...serializedToken } = data.token;

    setUser(data.user);

    setToken(serializedToken);

    setAuthStatus("authorized");

    localStorage.setItem("token", JSON.stringify(serializedToken));

    const expirationTime = serializedToken.expireAt;

    const remainingTime = calcTimeRemaining(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  }, []);

  const setTokenHandler = useCallback((data: TokenResponse) => {
    const { refreshToken: _, ...serializedToken } = data;

    setToken(serializedToken);
    setAuthStatus("authorized");

    localStorage.setItem("token", JSON.stringify(serializedToken));

    const expirationTime = serializedToken.expireAt;

    const remainingTime = calcTimeRemaining(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  }, []);

  const loginCallback = useCallback(
    async (args: Omit<SignInRequest, "fingerprint">) => {
      const fp = await FingerprintJS.load();

      const { visitorId: fingerprint } = await fp.get();

      const { data } = await auth.api.signIn({ ...args, fingerprint });

      loginTokenHandler(data);
    },
    [loginTokenHandler],
  );

  const refreshTokenCallback = useCallback(async () => {
    const fp = await FingerprintJS.load();

    const { visitorId: fingerprint } = await fp.get();

    const { data } = await auth.api.refreshToken({ fingerprint });

    setTokenHandler(data);
  }, [setTokenHandler]);

  const store: AuthState = useMemo(
    () => ({
      user,
      authStatus,
      // setAuthStatus,
      token,
      setUser,
      login: loginCallback,
      refresh: refreshTokenCallback,
      logout: logoutHandler,
    }),
    [authStatus, loginCallback, refreshTokenCallback, token, user],
  );

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
