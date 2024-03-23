import LogoSrc from "../../../images/np-logo.png";
import styles from "./Logo.module.css";
import { LogoProps } from "./Logo.props";
import cn from "classnames";

export function Logo({
  className,
  width = 120,
  ...props
}: LogoProps): JSX.Element {
  return (
    <img
      src={LogoSrc}
      alt="logo"
      className={cn(styles.logo, className)}
      width={width}
      {...props}
    />
  );
}
