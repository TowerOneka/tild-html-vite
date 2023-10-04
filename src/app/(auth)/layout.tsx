import React from "react";
import s from "./layout.module.scss";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.root}>
      <div className={s.bgOpacity} />
      <div className={s.childrenWrapper}>{children}</div>
    </div>
  );
};

export default layout;
