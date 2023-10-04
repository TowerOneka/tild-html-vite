import modsClasses from "@/shared/libs/modsClasses";
import { useMemo } from "react";
import cx from "classnames";

import s from "./Button.module.scss";
import { Link } from "react-router-dom";

type Props = {
  type?: "button" | "submit" | "reset";
  colorSchema?: "gradient";
  textSchema?: "p";
  sizeSchema?: "primary";
  className?: string;
  as?: "button" | "a";
  to?: string;
  href?: string;
  children: string;
};

const Button = ({
  colorSchema = "gradient",
  sizeSchema = "primary",
  textSchema = "p",
  as,
  href,
  to,
  className,
  type,
  children,
  ...props
}: Props) => {
  const mods = modsClasses(s, { colorSchema, sizeSchema, textSchema });

  const CustomTag = useMemo(() => {
    if (as) return as;
    if (href) return "a";
    return "button";
  }, [as, href]);

  if (to) {
    return (
      <Link
        to={to}
        className={cx(s.root, className, mods, {
          /* [s.centerFlex]: centerFlex */
        })}
        {...props}>
        {children}
      </Link>
    );
  }

  return (
    <CustomTag
      className={cx(s.root, className, mods, {
        // [s.centerFlex]: centerFlex,
        // [s.isProcess]: isLoading,
      })}
      type={CustomTag === "button" ? type : undefined}
      {...props}>
      <span>{children}</span>
    </CustomTag>
  );
};

export default Button;
