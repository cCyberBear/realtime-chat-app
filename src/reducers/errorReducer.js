import { SET_ERROR } from "../type";

const initialState = {
  error: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default errorReducer;
