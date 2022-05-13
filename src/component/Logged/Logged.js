import React from "react";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import { useEffect } from "react";
import { getConservation } from "../../action/chatAction";
import { useDispatch } from "react-redux";
const Logged = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConservation());
  });
  return (
    <div style={{ display: "flex" }} className="Logged">
      <ChatList />
      <Chat />
    </div>
  );
};

export default Logged;
