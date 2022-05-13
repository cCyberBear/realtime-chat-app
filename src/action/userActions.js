import axios from "axios";
import { SET_AUTHEN, SET_LOADING, SET_USER } from "../type";
import { setAuthToken } from "../helper/axiosHeader";
const getCurrentUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTHEN, payload: true });
    setAuthToken(token);
    const res = await axios.get("http://localhost:3300/kd/api/v0/user/me");
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {
    setAuthToken(null);
  }
  dispatch({ type: SET_AUTHEN, payload: false });
};
const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.post(
      "http://localhost:3300/kd/api/v0/user/login",
      data
    );
    localStorage.setItem("token", res.data.token);
    setAuthToken(res.data.token);
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
export { getCurrentUser, login };
