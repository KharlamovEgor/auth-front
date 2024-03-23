import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input className={cn(className, styles.input)} ref={ref} {...props} />
    );
  }
);
