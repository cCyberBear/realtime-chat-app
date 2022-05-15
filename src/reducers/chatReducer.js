import {
  SEND_MESSAGE,
  SET_ADD_CONTACT,
  SET_CONSERVATIONS,
  SET_CURRENT_CHAT,
} from "../type";

const initialState = {
  conservations: [],
  currentChat: [],
  opositeUser: null,
};

const chat = function (state = initialState, action) {
  switch (action.type) {
    case SET_CONSERVATIONS: {
      return {
        ...state,
        conservations: action.payload,
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        currentChat: [...state.currentChat, action.payload],
      };
    }
    case SET_ADD_CONTACT: {
      return {
        ...state,
        conservations: [...state.conservations, action.payload],
      };
    }
    case SET_CURRENT_CHAT: {
      return {
        ...state,
        currentChat: action.data,
        opositeUser: action.opositeUser,
      };
    }
    default: {
      return state;
    }
  }
};

export default chat;
