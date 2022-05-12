import {
  AppBar,
  Avatar,
  IconButton,
  Input,
  List,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import avatar from "../../assets/img/dd3abcf21ee0dfbe86f1.jpg";
import React, { useState } from "react";
import "./ChatList.scss";
import ChatListItem from "../ChatListItem/ChatListItem";
import { useSelector } from "react-redux";
const ChatList = () => {
  const [moreMenuEl, setMoreMenuEl] = useState(null);
  const conservations = useSelector((state) => state.chatReducer.conservations);

  const handleMoreMenuClick = (event) => {
    setMoreMenuEl(event.currentTarget);
  };

  const handleMoreMenuClose = (event) => {
    setMoreMenuEl(null);
  };
  return (
    <div className="ChatList">
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar className="user-bar">
          <Avatar src={avatar} alt="avatar"></Avatar>
          <div>
            <IconButton
              aria-owns={moreMenuEl ? "chats-more-menu" : null}
              aria-haspopup="true"
              onClick={handleMoreMenuClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="chats-more-menu"
              anchorEl={moreMenuEl}
              open={Boolean(moreMenuEl)}
              onClose={handleMoreMenuClose}
            >
              <MenuItem onClick={handleMoreMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMoreMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
        <Toolbar>
          <Paper className="paper">
            <SearchIcon color="primary" />
            <Input
              placeholder="Search or start new chat"
              disableUnderline
              fullWidth
            />
          </Paper>
        </Toolbar>
      </AppBar>
      <div className="scroll-bar">
        <List className="list">
          {conservations.map((val) => (
            <ChatListItem value={val} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default ChatList;
