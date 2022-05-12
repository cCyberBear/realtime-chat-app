import { SET_CONSERVATIONS } from "../type";

const initialState = {
  conservations: [],
};

const chat = function (state = initialState, action) {
  switch (action.type) {
    case SET_CONSERVATIONS: {
      return {
        ...state,
        conservations: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default chat;
