import cn from "classnames";
import { ChatTileProps } from "../chatTile/ChatTile.props";
import style from "./ChatTileContent.module.css";

export function ChatTileContent({
  className,
  children,
  ...props
}: ChatTileProps): JSX.Element {
  return (
    <div className={cn(style.content, className)} {...props}>
      {children}
    </div>
  );
}
