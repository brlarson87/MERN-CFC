import { combineReducers } from "redux";
import auth from "./auth";
import prizes from "./prizes";

export default combineReducers({
  auth,
  prizes
});
