import { GET_CHAT, SEND_MESSAGE } from "../type";

const initialState = [];

const chat = function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAT: {
      return {
        ...action.chat,
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        dialog: [...state.dialog, action.message],
      };
    }
    default: {
      return state;
    }
  }
};

export default chat;
