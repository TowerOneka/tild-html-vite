import { useActionsCreator } from "@/app/store/hooks";
import { userModel } from "@/entities/user";
import { useEffect } from "react";

const allActions = {
  ...userModel.userActions,
  refreshToken: userModel.userThunks.refreshTokenThunk,
};

export const useInitialFetch = () => {
  const { refreshToken, setAuthStatus } = useActionsCreator(allActions);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      refreshToken();
    } else {
      setAuthStatus("unauthorized");
    }
  }, [refreshToken, setAuthStatus]);
};
