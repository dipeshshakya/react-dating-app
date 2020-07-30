import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [message, setMessage] = useState([
    {
      name: "Mark",
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968",
      message: "whats up",
    },
    {
      name: "Mark",
      image:
        "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968",
      message: "How you doing?",
    },
    {
      message: "iam good how r u ?",
    },
  ]);
  return (
    <div>
      <p className="chatScreen__timestamp">YOU MATCHED MARK ON 2020/8/4</p>
      {message.map((msg) =>
        msg.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatscreen__image"
              alt={msg.name}
              src={msg.image}
            />

            <p className="chatScreen__text">{msg.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{msg.message}</p>
          </div>
        )
      )}
      <div className="chatScreen__form">
        <form action="" >
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message"
          />
          <button className="chatscreen__button">send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
