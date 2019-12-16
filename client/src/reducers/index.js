import { combineReducers } from "redux";
import auth from "./auth";
import prizes from "./prizes";
import charities from "./charities";

export default combineReducers({
  auth,
  prizes,
  charities
});
