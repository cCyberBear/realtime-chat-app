import React, { useState } from "react";
import "./Logged.scss";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import { useEffect } from "react";
import { getConservation } from "../../action/chatAction";
import { useDispatch, useSelector } from "react-redux";

import io from "socket.io-client";
import { SEND_MESSAGE, SET_WAIT_CHAT } from "../../type";
import { Alert } from "@mui/material";
const Logged = () => {
  const [socket, setSocket] = useState(null);
  const [newmess, setNewmess] = useState("");

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const conversation = useSelector((state) => state.chatReducer?.opositeUser);
  const error = useSelector((state) => state.errorReducer?.error);
  const conservations = useSelector(
    (state) => state.chatReducer?.conservations
  );
  const conservationIds = conservations.map((val) => val._id);

  const setupSocket = () => {
    if (!socket) {
      const newSocket = io("https://khuongduy-chat-app.herokuapp.com/", {
        query: {
          userId: currentUser._id,
        },
      });
      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
      });
      newSocket.on("connect", () => {});
      setSocket(newSocket);
    }
  };
  useEffect(() => {
    dispatch(getConservation());
    setupSocket();
  }, []);
  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (message) => {
        setNewmess(message._doc);
      });
    }
  });
  useEffect(() => {
    if (newmess.conversationId === conversation?._id) {
      dispatch({
        type: SEND_MESSAGE,
        payload: newmess,
      });
    } else if (conservationIds.includes(newmess.conversationId)) {
      dispatch({
        type: SET_WAIT_CHAT,
        payload: newmess,
      });
    } else {
      return;
    }
  }, [newmess]);
  return (
    <div style={{ display: "flex" }} className="Logged">
      {error && (
        <Alert className="error" variant="filled" severity="error">
          {error}, please reload the web page !!!
        </Alert>
      )}
      <ChatList socket={socket} />
      <Chat socket={socket} />
    </div>
  );
};

export default Logged;
