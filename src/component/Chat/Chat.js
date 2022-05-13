import {
  AppBar,
  Avatar,
  Input,
  Paper,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import "./Chat.scss";
import avatar from "../../assets/img/dd3abcf21ee0dfbe86f1.jpg";
import StatusIcon from "../StatusIcon/StatusIcon";
import Message from "../Message/Message";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

const Chat = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const messages = useSelector((state) => state.chatReducer.currentChat);
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  return (
    <div className="Chat">
      <AppBar className="appbar" elevation={1}>
        <Toolbar className="px-16">
          <div className="currentUser">
            <div className="outer">
              <div className="inner">
                <StatusIcon status={"online"} />
              </div>

              <Avatar src={avatar} alt="img"></Avatar>
            </div>
            <Typography color="inherit" className="name">
              This is name
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className="chatBoxWrapper">
        <div className="chatBoxTop ">
          {messages.map((val) => (
            <Message val={val} notOwn={val.sender !== currentUser._id} />
          ))}
        </div>
        <div className="chatBoxBottom ">
          <Paper className="paper">
            <form onSubmit={(e) => handleInput(e)} action="">
              <Input
                placeholder="Search or start new chat"
                disableUnderline
                fullWidth
                onChange={handleInputChange}
                value={input}
              />
              <IconButton type="submit">
                <SendIcon />
              </IconButton>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Chat;
