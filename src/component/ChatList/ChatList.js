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
import React, { useEffect, useState } from "react";
import "./ChatList.scss";
import ChatListItem from "../ChatListItem/ChatListItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../action/userActions";
import SearchItem from "../SearchItem/SearchItem";
const ChatList = ({ socket }) => {
  const [moreMenuEl, setMoreMenuEl] = useState(null);
  const conservations = useSelector((state) => state.chatReducer.conservations);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleMoreMenuClick = (event) => {
    setMoreMenuEl(event.currentTarget);
  };

  const handleMoreMenuClose = (event) => {
    setMoreMenuEl(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(getAllUser());
  };
  const handleClose = () => setOpen(false);
  const addFriend = () => {
    handleOpen();
    handleMoreMenuClose();
  };
  const style = {
    textAlign: "center",
    bgcolor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "50vh",
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
  };
  const search = {
    display: "flex",
    padding: "4px",
    margin: "10px auto",
    alignItem: "center",
    width: "90%",
  };
  const searchNewFriend = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  useEffect(() => {
    conservations.map((val) => {
      const chatroomId = val._id;
      if (socket) {
        socket.emit("joinRoom", {
          chatroomId,
        });
      }
      return true;
    });
  }, []);

  return (
    <div className="ChatList">
      <AppBar position="static" color="default" elevation={1}>
        <Modal
          className="modal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Paper style={style} className="modal">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Search contact
            </Typography>
            <form onSubmit={searchNewFriend}>
              <Paper style={search}>
                <SearchIcon color="primary" />
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search by email"
                  fullWidth
                />
              </Paper>
            </form>
            {users.map((val) => (
              <SearchItem value={val} />
            ))}
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
