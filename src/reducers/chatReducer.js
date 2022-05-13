import { SET_CONSERVATIONS, SET_CURRENT_CHAT } from "../type";

const initialState = {
  conservations: [],
  currentChat: [],
};

const chat = function (state = initialState, action) {
  switch (action.type) {
    case SET_CONSERVATIONS: {
      return {
        ...state,
        conservations: action.payload,
      };
    }
    case SET_CURRENT_CHAT: {
      return {
        ...state,
        currentChat: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default chat;
