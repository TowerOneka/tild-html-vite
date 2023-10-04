import { auth } from "@/shared/api";
import { useEffect } from "react";

import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const useInitialCheckAuth = () => {
  useEffect(() => {
    const getStartAuth = async () => {
      const fp = await FingerprintJS.load();
    };

    if (localStorage.getItem("token")) {
      getStartAuth();
    }
  }, []);
};
