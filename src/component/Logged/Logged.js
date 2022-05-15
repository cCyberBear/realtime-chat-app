import React, { useState } from "react";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import { useEffect } from "react";
import { getConservation } from "../../action/chatAction";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
const Logged = () => {
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const setupSocket = () => {
    if (!socket) {
      const newSocket = io("http://localhost:3300", {
        query: {
          userId: currentUser._id,
        },
      });
      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        console.log("Socket Disconnected!");
      });
      newSocket.on("connect", () => {
        console.log("connectted");
      });
      setSocket(newSocket);
    }
  };
  useEffect(() => {
    dispatch(getConservation());
    setupSocket();
  }, []);
  return (
    <div style={{ display: "flex" }} className="Logged">
      <ChatList socket={socket} />
      <Chat socket={socket} />
    </div>
  );
};

export default Logged;
