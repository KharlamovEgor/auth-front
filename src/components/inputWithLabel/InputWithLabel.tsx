import { ForwardedRef, forwardRef } from "react";
import { Input } from "../input/Input";
import { InputWithLabelProps } from "./InputWithLabel.props";
import cn from "classnames";
import styles from "./InputWithLabel.module.css";

export const InputWithLabel = forwardRef(
  (
    { labelContent, className, ...props }: InputWithLabelProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label className={styles.label}>
        <span>{labelContent}</span>
        <Input className={cn(className, styles.input)} {...props} ref={ref} />
      </label>
    );
  }
);
