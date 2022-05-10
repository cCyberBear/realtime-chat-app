import {
  Avatar,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import avatar from "../../assets/img/dd3abcf21ee0dfbe86f1.jpg";
import StatusIcon from "../StatusIcon/StatusIcon";
import "./ChatListItem.scss";
const ChatListItem = ({ value }) => {
  return (
    <ListItem className="ChatListItem" disablePadding>
      <ListItemButton className="itemButton">
        <div className="outer">
          <div className="inside">
            <StatusIcon status={value.status} />
          </div>
          <Avatar src={avatar} alt="img"></Avatar>
        </div>
        <ListItemText
          primary={<p className="text">{value.name}</p>}
          secondary={<p className="text">{value.message}</p>}
        />
        <div className="noti">
          <Typography className="date">{value.lastTime}</Typography>
          <div className="unread">2</div>
        </div>
      </ListItemButton>
    </ListItem>
  );
};

export default ChatListItem;
