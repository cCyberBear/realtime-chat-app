import React from "react";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import { useEffect } from "react";
import { getConservation } from "../../action/chatAction";
import { useDispatch, useSelector } from "react-redux";
const Logged = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.currentUser.username);
  dispatch(getConservation());
  useEffect(() => {
    console.log(user);
  });
  return (
    <div style={{ display: "flex" }} className="Logged">
      <ChatList />
      <Chat />
    </div>
  );
};

export default Logged;
