import { useContext } from "react";
import { AuthContext, AuthState } from "../model";

export const useAuthContext = (): AuthState => {
  return useContext(AuthContext);
};
