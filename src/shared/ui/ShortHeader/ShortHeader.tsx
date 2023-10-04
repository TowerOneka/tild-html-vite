import React from "react";
import s from "./ShortHeader.module.scss";
import Logo from "../_icons/AnimatedLogo";
// import Logo from "@/assets/logo.svg";
import cx from "classnames";

type Props = {
  className: string;
};

const ShortHeader = ({ className }: Props) => {
  return (
    <nav className={cx(s.root, className)}>
      <Logo className={s.logo} />
    </nav>
  );
};

export default ShortHeader;
