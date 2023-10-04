import React, { useCallback, useState } from "react";
import Eye from "@/shared/assets/eye.svg?react";
import EyeOff from "@/shared/assets/eye-off.svg?react";
import Input from "../Input";
import s from "./InputPassword.module.scss";

type Props = Omit<React.HTMLProps<HTMLInputElement>, "onChange"> & {
  label?: string;
  classNameWrapper?: string;
  colorSchema?: "primary";
  textSchema?: "p";
  sizeSchema?: "primary";
  // fullWidth?: boolean;
  RightIcon?: undefined;
  name: string;
  onChange: (name: string, value: string) => void;
};
const InputPassword = ({ value, onChange, ...props }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSetIsShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  return (
    <Input
      value={value}
      type={isShowPassword ? "text" : "password"}
      onRightIconClick={handleSetIsShowPassword}
      className={s.root}
      classNameRightIcon={s.rightIcon}
      RightIcon={isShowPassword ? () => <Eye /> : () => <EyeOff />}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputPassword;
