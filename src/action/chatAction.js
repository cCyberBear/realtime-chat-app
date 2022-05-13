import axios from "axios";
import { SET_CONSERVATIONS, SET_CURRENT_CHAT, SET_LOADING } from "../type";
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

const getCurrentChat = (conversationId) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.get(
      `http://localhost:3300/kd/api/v0/message/get-message/${conversationId}`
    );
    dispatch({ type: SET_CURRENT_CHAT, payload: res.data });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
export { getConservation, getCurrentChat };
