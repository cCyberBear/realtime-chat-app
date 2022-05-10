import axios from "axios";
import { SET_LOADING, SET_USER } from "../type";
const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await axios.post(
      "https://khuongduy.herokuapp.com/kd/api/v0/user/login",
      data
    );
    dispatch({ type: SET_USER, payload: res.data.user });
  } catch (error) {}
  dispatch({ type: SET_LOADING, payload: false });
};
export { login };
