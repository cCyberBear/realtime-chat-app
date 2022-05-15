import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getCurrentUser } from "./action/userActions";
import "./App.scss";
import Logged from "./component/Logged/Logged";
import LoginPage from "./component/LoginPage/LoginPage";
import Register from "./component/Register/Register";
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
      <Routes>
        <Route
          path="/register"
          element={
            authen ? <p>Authing ..... </p> : user ? <Logged /> : <Register />
          }
        ></Route>
        <Route
          path="/"
          element={
            authen ? <p>Authing ..... </p> : user ? <Logged /> : <LoginPage />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
