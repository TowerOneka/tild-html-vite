import React from "react";
import { useInitialFetch } from "../hooks";
import { configureAxios } from "@/shared/config/authConfigError";

type Props = {
  children: React.ReactNode;
};

configureAxios();

const AuthSettingsWrapper = ({ children }: Props) => {
  useInitialFetch();

  return <>{children}</>;
};

export default AuthSettingsWrapper;
