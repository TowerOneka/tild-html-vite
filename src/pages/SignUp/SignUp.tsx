import React, { useCallback, useState } from "react";

import s from "./SignUp.module.scss";
import Input from "@/shared/ui/Input";
import Text from "@/shared/ui/Text";
import Button from "@/shared/ui/Button";
import ShortHeader from "@/shared/ui/ShortHeader";
import InputPassword from "@/shared/ui/InputPassword";
import { AnimatePresence, motion } from "framer-motion";
import AuthLayout from "@/shared/ui/AuthLayout";
// import { useAuthContext } from "@/entities/user/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useActionsCreator } from "@/app/store/hooks";
import { signUpThunk } from "@/entities/user/model/thunks";

const allActions = {
  signUp: signUpThunk,
};

const SignUp = () => {
  const { signUp } = useActionsCreator(allActions);

  const location = useLocation();

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleChangeField = useCallback((name: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmitForm = useCallback<React.FormEventHandler<HTMLFormElement>>(
    async (e) => {
      e.preventDefault();

      const { repeatPassword: _, ...values } = fields;

      signUp(values).then(() => navigate(location.state?.from.pathname || "/profile"));
    },
    [fields, location.state?.from.pathname, navigate, signUp],
  );

  return (
    <AuthLayout>
      <AnimatePresence mode="wait">
        <motion.div
          className={s.formWrapper}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <ShortHeader className={s.header} />
          <Text as="h1" preset="formTitle" color="gradient" textAlign="center" className={s.title}>
            Зарегистрироваться
          </Text>
          <form onSubmit={handleSubmitForm} className={s.fieldsWrapper}>
            <div className={s.nameFields}>
              <Input placeholder="Имя" name="firstName" onChange={handleChangeField} value={fields.firstName} />
              <Input placeholder="Фамилия" name="lastName" onChange={handleChangeField} value={fields.lastName} />
            </div>
            <Input placeholder="Почта" name="email" onChange={handleChangeField} value={fields.email} />
            <Input placeholder="Никнейм" name="username" onChange={handleChangeField} value={fields.username} />
            <InputPassword placeholder="Пароль" name="password" onChange={handleChangeField} value={fields.password} />
            <InputPassword
              name="repeatPassword"
              onChange={handleChangeField}
              placeholder="Повторить пароль"
              value={fields.repeatPassword}
            />

            <Text textAlign="center">
              Есть аккаунт?{" "}
              <Text
                to="/sign-in"
                state={
                  !!location.state?.from && location.state.from.pathname.startsWith("/")
                    ? location.state.from
                    : undefined
                }>
                Войти?
              </Text>
            </Text>

            <Button className={s.button} type="submit" colorSchema="gradient">
              Регистрация
            </Button>
          </form>
        </motion.div>
      </AnimatePresence>
    </AuthLayout>
  );
};

export default SignUp;
