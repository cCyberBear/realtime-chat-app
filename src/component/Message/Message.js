import { Avatar, Paper } from "@mui/material";
import React from "react";
import "./Message.scss";
import noavatar from "../../assets/img/noAvatar.png";

const Message = ({ val, not_own }) => {
  const format = (time) => {
    const date = new Date(time);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  };
  return (
    <div className={not_own ? "Message" : "Message own"}>
      <div className="messageTop">
        {not_own && (
          <Avatar
            className="img"
            src={val.profilePicture ? val.profilePicture : noavatar}
          />
        )}
        <Paper
          className="text"
          style={{ backgroundColor: not_own ? "#212121" : "#039BE5" }}>
          {val.text}
          <div className="messageTime">{format(val.createdAt)}</div>
        </Paper>
      </div>
    </div>
  );
};

export default Message;
