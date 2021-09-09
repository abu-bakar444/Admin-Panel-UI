import React from "react";
import styles from "./styles/ChatReuseable.module.css";
import person3 from "../components/tempimages/person3.jpg";
import person2 from "../components/tempimages/person2.jpg";
function ChatReuseable(props) {
  let trimmedMessage = props.message.slice(0, 100);
  if (props.message.length > 100) {
    trimmedMessage = trimmedMessage.concat(" ...");
  }
  return (
    <div className={styles.contentListElement}>
      <div className={styles.contentListIMG}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.contentListContent}>
        <div className={styles.personName}>{props.name}</div>
        <div className={styles.personMessage}>{trimmedMessage}</div>
      </div>
    </div>
  );
}

export default ChatReuseable;
