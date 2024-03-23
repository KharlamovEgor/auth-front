import cn from "classnames";
import { ChatTileImgProps } from "./ChatTileImg.props";
import styles from "./ChatTileImg.module.css";
import DefaultAvatar from "../../../images/user.png";

export function ChatTileImg({
  className,
  src = DefaultAvatar,
  ...props
}: ChatTileImgProps): JSX.Element {
  return <img src={src} className={cn(styles.img, className)} {...props} />;
}
