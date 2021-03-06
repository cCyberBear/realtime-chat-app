import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentChat } from "../../action/chatAction";
import AvatarByName from "../AvatarByName/AvatarByName";
import StatusIcon from "../StatusIcon/StatusIcon";
import "./ChatListItem.scss";
const ChatListItem = ({ value }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const chater = value.members.filter((val) => val._id !== currentUser._id)[0];
  return (
    <ListItem
      className="ChatListItem"
      disablePadding
      onClick={() => dispatch(getCurrentChat(value))}>
      <ListItemButton className="itemButton">
        <div className="outer">
          <div className="inside">
            <StatusIcon status={value.status} />
          </div>
          <AvatarByName name={chater.username} />
        </div>
        <ListItemText
          primary={<p className="text">{chater.username}</p>}
          secondary={<p className="text">{value.message}</p>}
        />
        <div className="noti">
          <Typography className="date">{value.lastTime}</Typography>
          {/* <div className="unread">2</div> */}
        </div>
      </ListItemButton>
    </ListItem>
  );
};

export default ChatListItem;
