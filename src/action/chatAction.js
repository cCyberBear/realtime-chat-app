import axios from "axios";
import { SET_CONSERVATIONS, SET_LOADING, SET_USER } from "../type";
import store from "../store";

const getConservation = () => async (dispatch) => {
  const user = store.getState().userReducer.currentUser;
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.get(
      `http://localhost:5000/kd/api/v0/conservation/get-conversation/${user._id}`
    );
    dispatch({ type: SET_CONSERVATIONS, payload: res.data });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
export { getConservation };
