import {
  AppBar,
  Avatar,
  Input,
  Paper,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import noAvatar from "../../assets/img/noAvatar.png";
import StatusIcon from "../StatusIcon/StatusIcon";
import Message from "../Message/Message";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

const Chat = ({ socket }) => {
  const [input, setInput] = useState("");

  const messages = useSelector((state) => state.chatReducer?.currentChat);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const conversation = useSelector((state) => state.chatReducer.opositeUser);
  const scrollRef = useRef();
  const opositeUserData = conversation?.members.filter(
    (val) => val._id !== currentUser._id
  )[0];
  const handleInput = (e) => {
    e.preventDefault();
    const message = {
      conversationId: conversation._id,
      sender: currentUser._id,
      text: input,
    };
    if (socket) {
      socket.emit("chatroomMessage", { ...message });
    }
    setInput("");
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="Chat">
      {conversation ? (
        <>
          <AppBar className="appbar" elevation={1}>
            <Toolbar className="px-16">
              <div className="currentUser">
                <div className="outer">
                  <div className="inner">
                    <StatusIcon status={"online"} />
                  </div>

                  <Avatar
                    src={
                      opositeUserData.profilePicture
                        ? opositeUserData.profilePicture
                        : noAvatar
                    }
                    alt="img"></Avatar>
                </div>
                <Typography color="inherit" className="name">
                  {opositeUserData.username}
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
          <div className="chatBoxWrapper">
            <div className="chatBoxTop ">
              {messages.map((val) => (
                <div ref={scrollRef}>
                  <Message
                    key={val._id}
                    val={val}
                    not_own={val.sender !== currentUser._id}
                  />
                </div>
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
        </>
      ) : (
        <h1>Choose a contact</h1>
      )}
    </div>
  );
};

export default Chat;
