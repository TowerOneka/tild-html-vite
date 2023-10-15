import ShortHeader from "@/shared/ui/ShortHeader";
import React, { useCallback, useState, useEffect } from "react";
import s from "./Login.module.scss";
import Input from "@/shared/ui/Input";
import Text from "@/shared/ui/Text";
import InputPassword from "@/shared/ui/InputPassword/InputPassword";
import Button from "@/shared/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import AuthLayout from "@/shared/ui/AuthLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { loginThunk } from "@/entities/user/model/thunks";
import { useActionsCreator } from "@/app/store/hooks";

const allActions = {
  login: loginThunk,
};

const Login = () => {
  const location = useLocation();

  const { login } = useActionsCreator(allActions);

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleChangeField = useCallback((name: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();

      await login({
        email: fields.email,
        password: fields.password,
      }).then(() => {
        navigate(location.state?.from?.pathname || "/profile");
      });
    },
    [fields.email, fields.password, location.state?.from.pathname, login, navigate],
  );

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.formWrapper}>
        <ShortHeader className={s.header} />
        <Text as="h1" preset="formTitle" color="gradient" textAlign="center" className={s.title}>
          Вход
        </Text>
        <form onSubmit={handleSubmitForm} className={s.fieldsWrapper}>
          <Input placeholder="Почта" name="email" onChange={handleChangeField} value={fields.email} />
          <InputPassword placeholder="Пароль" name="password" onChange={handleChangeField} value={fields.password} />
          <Text>
            Нет аккаунта?{" "}
            <Text
              to="/sign-up"
              state={
                !!location.state.from && location.state.from?.pathname?.startsWith("/")
                  ? location.state.from
                  : undefined
              }>
              Зарегистрироваться?
            </Text>
          </Text>
          <Button className={s.button} type="submit" colorSchema="gradient">
            Войти
          </Button>
        </form>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
