// import { useAuthContext } from "@/entities/user/hooks";
import { useSelector } from "@/app/store/hooks";
import { authStateSelector } from "@/entities/user/model/selectors";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AuthRequired = ({ children }: Props) => {
  const authStatus = useSelector(authStateSelector);

  const location = useLocation();

  if (authStatus === "init") {
    return null;
  }

  if (authStatus === "unauthorized") {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

export default AuthRequired;
