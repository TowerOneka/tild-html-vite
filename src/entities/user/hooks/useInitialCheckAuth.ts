import { useEffect } from "react";
import { useAuthContext } from ".";

export const useInitialCheckAuth = () => {
  const { refresh } = useAuthContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      refresh();
    }
  }, [refresh]);
};
