import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(className, styles.button)} {...props}>
      {children}
    </button>
  );
}
