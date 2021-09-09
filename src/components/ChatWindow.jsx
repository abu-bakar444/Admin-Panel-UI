import React from "react";
import styles2 from "./styles/ChatWindow.module.css";
import person3 from "../components/tempimages/person3.jpg";
import person2 from "../components/tempimages/person2.jpg";
function ChatWindow() {
  return (
    <>
      <div className={styles2.chatNav}>
        <div className={styles2.imgDiv}>
          <img src={person2} alt="" />
        </div>
        {/* set received and sent logic according to incoming data */}
        <div className={styles2.navNameContainer}>
          <h3 className={styles2.navName}>User Name</h3>
        </div>
      </div>

      <div className={`message ${styles2.received} ${styles2.message}`}>
        <img src={person2} />
        <p>jkdssdhhshudshushuds</p>
      </div>
      <div className={`message ${styles2.sent} ${styles2.message}`}>
        <img src={person2} />
        <p>jkdssdhhshudshushuds</p>
      </div>
      <div className={`message ${styles2.sent} ${styles2.message}`}>
        <img src={person2} />
        <p>jkdssdhhshudshushuds</p>
      </div>

      <div className={styles2.formWrapper}>
        <form
        // onSubmit={sendMessage}
        >
          <input
            // value={formValue}
            // onChange={(e) => setFormValue(e.target.value)}
            placeholder="Write a message"
          />

          <button
            type="submit"
            //  disabled={!formValue}
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatWindow;
