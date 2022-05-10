import { Avatar, Paper } from "@mui/material";
import React from "react";
import "./Message.scss";
const Message = ({ avatar, notOwn, time }) => {
  return (
    <div notOwn className={notOwn ? "Message" : "Message own"}>
      <div className="messageTop">
        {notOwn && <Avatar className="img" src={avatar} />}
        <Paper
          className="text"
          style={{ backgroundColor: notOwn ? "#212121" : "#039BE5" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit officia
          at eos labore deleniti odio nobis, molestias sunt adipisci
          voluptatibus. Nostrum aperiam dignissimos tempora debitis, asperiores
          placeat expedita sint magni?
          <div className="messageTime">{time}</div>
        </Paper>
      </div>
    </div>
  );
};

export default Message;
