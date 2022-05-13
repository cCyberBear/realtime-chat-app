import {
  AppBar,
  Avatar,
  IconButton,
  Input,
  List,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addFriend = () => {
    handleOpen();
    handleMoreMenuClose();
  };
  const style = {
    bgcolor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    hieght: "50vh",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="ChatList">
      <AppBar position="static" color="default" elevation={1}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Paper>
        </Modal>
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
              <MenuItem onClick={addFriend}>
                <ListItemIcon>
                  <PersonAddAltIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add friend</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMoreMenuClose}>
                <ListItemIcon>
                  <ManageAccountsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleMoreMenuClose}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
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
