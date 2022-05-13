import { Avatar, Paper } from "@mui/material";
import React from "react";
import "./Message.scss";
import noavatar from "../../assets/img/noAvatar.png";

const Message = ({ val, notOwn }) => {
  const format = (time) => {
    const date = new Date(time);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  };
  return (
    <div notOwn className={notOwn ? "Message" : "Message own"}>
      <div className="messageTop">
        {notOwn && (
          <Avatar
            className="img"
            src={val.profilePicture ? val.profilePicture : noavatar}
          />
        )}
        <Paper
          className="text"
          style={{ backgroundColor: notOwn ? "#212121" : "#039BE5" }}>
          {val.text}
          <div className="messageTime">{format(val.createdAt)}</div>
        </Paper>
      </div>
    </div>
  );
};

export default Message;
