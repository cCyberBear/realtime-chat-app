import { SET_USER, SET_LOADING, SET_CURRENT_CHAT } from "../type";
const initialValue = {
  currentUser: null,
  loading: false,
  chatLists: [
    {
      name: "Vo Van A",
      message: "choi game khong nao cac chien si",
      status: "online",
      lastTime: "May 08, 2022",
    },
    {
      name: "Tran Thi Ngoc B",
      message: "ngay mai nau com cho tao",
      status: "away",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Le Ngoc C",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Nguyen Minh D",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Duong Minh E",
      message: "ngay mai nau com cho tao",
      status: "away",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Nguyen Ngoc T",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Huynh Dang K",
      message: "ngay mai nau com cho tao",
      status: "away",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Le Minh H",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Nguyen Xuan L",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
    {
      name: "Luong Minh T",
      message: "ngay mai nau com cho tao",
      status: "offline",
      lastTime: "Apr 08, 2022",
    },
  ],
  currentChat: null,
};
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
