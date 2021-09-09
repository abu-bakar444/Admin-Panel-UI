import React from "react";
import styles from "./styles/chat.module.css";
import person3 from "../components/tempimages/person3.jpg";
import person2 from "../components/tempimages/person2.jpg";
import ChatReuseable from "./ChatReuseable";
import styles2 from "./styles/ChatWindow.module.css";

function Chat() {
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.wrapperContainer}></div>
        <div className={styles.headingContainer}>
          <h1>Chats</h1>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentList}>
            {/* In case of real data, receive data in the form of array.apply "map" and pass data in prop
                  also remove img imports */}
            <ChatReuseable
              name="Jon Snow"
              img={person2}
              message="In pustrate thum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person3}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person2}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person3}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person2}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person3}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
            <ChatReuseable
              img={person2}
              name="Jon Snow"
              message="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
