import { useEffect, useState } from "react";
import { ChatTile } from "../../components";
import styles from "./ChatsPage.module.css";

export function ChatsPage(): JSX.Element {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.24:6543/api/chat-controller/user-chats", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.chats}>
        {list.map((data: any) => (
          <ChatTile key={data.chatId}>
            <ChatTile.Img />
            <ChatTile.Content>
              <h3>{data.companionUsername}</h3>
              <p>previos message</p>
            </ChatTile.Content>
          </ChatTile>
        ))}
      </div>
      <div className="chat"></div>
    </main>
  );
}
