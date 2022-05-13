import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./action/userActions";
import "./App.scss";
import Logged from "./component/Logged/Logged";

import LoginPage from "./component/LoginPage/LoginPage";

const App = () => {
  const dispatch = useDispatch();
  const authen = useSelector((state) => state.userReducer.authen);
  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(getCurrentUser(token));
  }, []);

  const user = useSelector((state) => state.userReducer.currentUser);

  return (
    <div className="App">
      {authen ? <p>Authing ..... </p> : user ? <Logged /> : <LoginPage />}
    </div>
  );
};

export default App;
