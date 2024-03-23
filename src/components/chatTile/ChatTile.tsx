import cn from "classnames";
import { ChatTileContent } from "../ChatTileContent/ChatTileContent";
import { ChatTileContentProps } from "../ChatTileContent/ChatTileContent.props";
import { ChatTileImg } from "../ChatTileImg/ChatTileImg";
import { ChatTileImgProps } from "../ChatTileImg/ChatTileImg.props";
import { ChatTileProps } from "./ChatTile.props";
import styles from "./ChatTile.module.css";

interface ChatTilesComposition {
  Img: ({ }: ChatTileImgProps) => JSX.Element;
  Content: ({ }: ChatTileContentProps) => JSX.Element;
}

export const ChatTile: (({ }: ChatTileProps) => JSX.Element) &
  ChatTilesComposition = ({ children, className, ...props }: ChatTileProps) => {
    return (
      <div className={cn(className, styles.chatTile)} {...props}>
        {children}
      </div>
    );
  };

ChatTile.Img = ChatTileImg;
ChatTile.Content = ChatTileContent;
