import { combineReducers } from "redux";
import auth from "./auth";
import prizes from "./prizes";
import charities from "./charities";
import alert from "./alert";
import modal from "./modal";
import loader from "./loader";

export default combineReducers({
  auth,
  prizes,
  charities,
  alert,
  modal,
  loader,
});
