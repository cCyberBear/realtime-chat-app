import { Paper } from "@mui/material";
import React from "react";
import "./Message.scss";
import AvatarByName from "../AvatarByName/AvatarByName";

const Message = ({ val, not_own, opositeUserData }) => {
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
          <AvatarByName
            style={{ margin: "0 10px" }}
            name={opositeUserData.username}
          />
        )}
        <Paper
          className="text"
          style={{ backgroundColor: not_own ? "#212121" : "#039BE5" }}
        >
          {val.text}
          <div className="messageTime">{format(val.createdAt)}</div>
        </Paper>
      </div>
    </div>
  );
};

export default Message;
