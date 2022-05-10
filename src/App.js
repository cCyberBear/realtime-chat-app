import Chat from "./component/Chat/Chat";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ChatList from "./component/ChatList/ChatList";
import LoginPage from "./component/LoginPage/LoginPage";

const App = () => {
  const user = useSelector((state) => state.userReducer.currentUser);
  return (
    <div className="App">
      {!user ? (
        <LoginPage />
      ) : (
        <div className="Logged">
          <ChatList />
          <Chat />
        </div>
      )}
    </div>
  );
};

export default App;
