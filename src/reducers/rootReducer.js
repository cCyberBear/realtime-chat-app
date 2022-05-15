import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  userReducer,
  chatReducer,
  errorReducer,
});
export default rootReducer;
