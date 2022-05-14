import { SET_USER, SET_LOADING, SET_AUTHEN, SET_ALL_USERS } from "../type";
const initialValue = {
  users: [],
  currentUser: null,
  loading: false,
  authen: false,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_AUTHEN:
      return {
        ...state,
        authen: action.payload,
      };
    case SET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
