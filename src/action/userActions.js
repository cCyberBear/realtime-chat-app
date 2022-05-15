import axios from "axios";
import {
  SET_ADD_CONTACT,
  SET_ALL_USERS,
  SET_AUTHEN,
  SET_ERROR,
  SET_LOADING,
  SET_USER,
} from "../type";
import { setAuthToken } from "../helper/axiosHeader";
import store from "../store";
const getCurrentUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: SET_AUTHEN, payload: true });
    setAuthToken(token);
    const res = await axios.get(
      "https://khuongduy-chat-app.herokuapp.com/kd/api/v0/user/me"
    );
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
      "https://khuongduy-chat-app.herokuapp.com/kd/api/v0/user/login",
      data
    );
    localStorage.setItem("token", res.data.token);
    setAuthToken(res.data.token);
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.post(
      "https://khuongduy-chat-app.herokuapp.com/kd/api/v0/user/register",
      data
    );
    localStorage.setItem("token", res.data.token);
    setAuthToken(res.data.token);
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
const getAllUser = () => async (dispatch) => {
  const user = store.getState().userReducer.currentUser;
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.get(
      "https://khuongduy-chat-app.herokuapp.com/kd/api/v0/user/all-user"
    );
    const users = res.data.users.filter((val) => val._id !== user._id);
    dispatch({ type: SET_ALL_USERS, payload: users });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: SET_LOADING, payload: false });
};
const addContact = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.post(
      "https://khuongduy-chat-app.herokuapp.com/kd/api/v0/conservation/create-conversation",
      data
    );
    dispatch({ type: SET_ADD_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: SET_ERROR, payload: error.response.data.message });
    setTimeout(() => {
      dispatch({ type: SET_ERROR, payload: null });
    }, 5000);
  }
  dispatch({ type: SET_LOADING, payload: false });
};

const logOut = () => (dispatch) => {
  setAuthToken(null);
  dispatch({ type: SET_USER, payload: null });
  localStorage.removeItem("token");
};
export { getCurrentUser, login, getAllUser, register, addContact, logOut };
