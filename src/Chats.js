import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark Zukerburg"
        message="Hey! whats up"
        timestamp="35 sec ago"
        image="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968"
      />
    </div>
  );
}

export default Chats;
