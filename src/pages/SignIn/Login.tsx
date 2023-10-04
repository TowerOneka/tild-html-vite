import ShortHeader from "@/shared/ui/ShortHeader";
import React, { useCallback, useState } from "react";
import s from "./Login.module.scss";
import Input from "@/shared/ui/Input";
import Text from "@/shared/ui/Text";
import InputPassword from "@/shared/ui/InputPassword/InputPassword";
import Button from "@/shared/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

import FingerprintJS from "@fingerprintjs/fingerprintjs";
import AuthLayout from "@/shared/ui/AuthLayout";

const Login = () => {
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

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = useCallback(async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const fp = await FingerprintJS.load();

    const { visitorId: fingerprint } = await fp.get();

    // const res = await signIn("credentials", {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   fingerprint,
    //   redirect: false,
    // });
  }, []);

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
            Нет аккаунта? <Text to={`/sign-up`}>Зарегистрироваться?</Text>
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
