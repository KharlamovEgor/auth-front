import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

export function HomePage(): JSX.Element {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://192.168.1.24:6543/api/demo-controller/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      mode: "cors",
    })
      .then((responce) => responce.text())
      .then((data) => setText(data));
  }, []);

  return <div className={styles.container}>{text}</div>;
}
