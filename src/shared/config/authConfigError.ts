import { TokenResponse } from "../api/auth/types";
import { forceLogout } from "../libs/forceLogout";
import { Methods, axiosWithAuth, request } from "../libs/request";

export const configureAxios = () => {
  axiosWithAuth.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalRequest = error.config;

      const fingerprint = sessionStorage.getItem("fingerprint");

      if (!fingerprint) {
        forceLogout();

        return;
      }

      if (error.config && fingerprint && !error.config._isRetry) {
        originalRequest.__isRetry = true;
        try {
          const response = await request<TokenResponse>(Methods.POST, {
            url: "user/refresh",
            data: {
              fingerprint,
            },
          });

          localStorage.setItem("token", response.data.accessToken);

          return axiosWithAuth.request(originalRequest);
        } catch (error) {
          forceLogout();
          return error;
        }
      }

      throw error;
    },
  );
};
