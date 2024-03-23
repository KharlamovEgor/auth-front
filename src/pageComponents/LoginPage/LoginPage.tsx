import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { InputWithLabel } from "../../components";
import { Button, Logo } from "../../components";
import { Login } from "../../interfaces/login.interface";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const [aniFlag, setAniFlag] = useState<number>(0);
  const [passErrorFlag, setPassErrorFlag] = useState<number>(0);
  const navigate = useNavigate();

  const onSubmit = async (data: Login) => {
    let errorFlag = false;
    try {
      const responce = await fetch(
        "http://192.168.1.24:6543/api/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const jwt = await responce.json();
      localStorage.setItem("jwt", jwt.token);
    } catch {
      reset();

      setAniFlag(0);
      setPassErrorFlag(0);

      errorFlag = true;
    }

    if (!errorFlag) {
      navigate("/chats", { replace: true });
    }
  };

  const variants = {
    intial: {
      transform: "translateX(-700px)",
      height: 0,
    },
    final: {
      transform: "translateX(0)",
      height: "auto",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
        <h1 className={styles.logoHeader}>Notify People</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.header}>Login</h2>
        <motion.div animate={aniFlag == 0 ? variants.final : variants.intial}>
          <InputWithLabel
            labelContent="Username:"
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p role="alert" className={styles.alert}>
              {errors.username?.message}
            </p>
          )}
        </motion.div>
        <motion.div
          initial={variants.intial}
          animate={aniFlag == 0 ? variants.intial : variants.final}
        >
          <InputWithLabel
            labelContent="Password:"
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && passErrorFlag ? (
            <p role="alert" className={styles.alert}>
              {errors.password?.message}
            </p>
          ) : undefined}
        </motion.div>
        <Button
          type="submit"
          onClick={() => {
            if (watch("username") != "" && watch("username") != undefined) {
              setAniFlag(1);
            }

            if (aniFlag == 1) {
              setPassErrorFlag(1);
            }
          }}
        >
          {aniFlag == 0 ? "Continue" : "login"}
        </Button>
      </form>
    </div>
  );
}
