import React from "react";
import s from "./AuthLayout.module.scss";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.root}>
      <div className={s.bgOpacity} />
      <div className={s.childrenWrapper}>{children}</div>
    </div>
  );
};

export default AuthLayout;
