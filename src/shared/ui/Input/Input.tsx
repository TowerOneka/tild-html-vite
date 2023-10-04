import cx from "classnames";
import React, { useCallback, useState } from "react";

import s from "./Input.module.scss";
import modsClasses from "@/shared/libs/modsClasses";

type Props = Omit<React.HTMLProps<HTMLInputElement>, "onChange"> & {
  label?: string;
  classNameWrapper?: string;
  classNameRightIcon?: string;
  colorSchema?: "primary";
  textSchema?: "p";
  sizeSchema?: "primary";
  // fullWidth?: boolean;
  RightIcon?: React.FC;
  onRightIconClick?: () => void;
} & {
  name: string;
  onChange: (name: string, value: string) => void;
};
// | {
//     name?: never;
//     onChange: (e: , value?: never) => void;
//   }

const Input = ({
  className,
  classNameWrapper,
  classNameRightIcon,
  RightIcon,
  label,
  onRightIconClick,
  id,
  colorSchema = "primary",
  sizeSchema = "primary",
  textSchema = "p",
  name,
  onChange,
  // fullWidth,
  ...props
}: Props) => {
  const mods = modsClasses(s, { colorSchema, sizeSchema, textSchema });

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (name) {
        onChange(e.target.name, e.target.value);
      }
    },
    [name, onChange],
  );

  return (
    <div className={cx(s.wrapper, classNameWrapper)}>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cx(s.inputWrapper, mods, className, { [s.focused]: isFocused })}>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          name={name}
          onChange={handleChange}
          id={id}
          className={cx(s.input)}
          {...props}
        />
        {RightIcon && (
          <div className={cx(s.rightIconWrapper, classNameRightIcon)} onClick={onRightIconClick}>
            <RightIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
