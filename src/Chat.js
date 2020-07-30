import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
function Chat({ name, image, timestamp, message }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_img" alt={name} src={image} />
        <div className="chat__details">
          <h3 className="chat__name">{name}</h3>
          <p className="message">{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
