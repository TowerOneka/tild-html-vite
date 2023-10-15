import React, { useMemo } from "react";
import s from "./Text.module.scss";
import modsClasses from "@/shared/libs/modsClasses";
import cx from "classnames";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
  color?: "black" | "fuchsia" | "gradient" | "deepLilac" | "darkOrchid";
  preset?: "p" | "formTitle";
  textAlign?: "center" | "left" | "right";
  children: string | React.ReactNode;
} & (
  | {
      to?: string;
      state?: object;
      as?: never;
      href?: never;
    }
  | {
      as?: never;
      to?: never;
      state?: never;
      href?: string;
    }
  | {
      as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
      to?: never;
      state?: never;
      href?: never;
    }
);

const Text = ({ as, children, to, className, href, preset = "p", state, color, textAlign }: Props) => {
  const mods = modsClasses(s, { color: color ? color : to ? "darkOrchid" : "black", preset, textAlign });

  const CustomTag = useMemo(() => {
    if (as) return as;
    if (href) return "a";
    return "p";
  }, [as, href]);

  if (to) {
    return (
      <Link className={cx(s.root, className, mods)} to={to} state={state}>
        {children}
      </Link>
    );
  }

  return (
    <CustomTag href={href} className={cx(s.root, className, mods)}>
      {children}
    </CustomTag>
  );
};

export default Text;
