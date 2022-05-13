import axios from "axios";
import {
  SEND_MESSAGE,
  SET_CONSERVATIONS,
  SET_CURRENT_CHAT,
  SET_LOADING,
} from "../type";
import store from "../store";

const getConservation = () => async (dispatch) => {
  const user = store.getState().userReducer.currentUser;
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.get(
      `http://localhost:3300/kd/api/v0/conservation/get-conversation/${user._id}`
    );
    dispatch({ type: SET_CONSERVATIONS, payload: res.data });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};

const getCurrentChat = (conversation) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.get(
      `http://localhost:3300/kd/api/v0/message/get-message/${conversation._id}`
    );
    dispatch({
      type: SET_CURRENT_CHAT,
      data: res.data,
      opositeUser: conversation,
    });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
const sendMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.post(
      `http://localhost:3300/kd/api/v0/message/send-message/`,
      message
    );
    dispatch({
      type: SEND_MESSAGE,
      payload: res.data,
    });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
export { getConservation, getCurrentChat, sendMessage };
