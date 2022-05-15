import {
  SEND_MESSAGE,
  SET_ADD_CONTACT,
  SET_CONSERVATIONS,
  SET_CURRENT_CHAT,
  SET_WAIT_CHAT,
} from "../type";

const initialState = {
  conservations: [],
  currentChat: [],
  waitChat: [],
  opositeUser: null,
};

const chat = (state = initialState, action) => {
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
    case SET_WAIT_CHAT: {
      return {
        ...state,
        waitChat: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default chat;
