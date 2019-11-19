import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_AUTH,
  REGISTER_SUCCESS,
  TICKETS_ADDED
} from "./types";

import setAuthToken from "../utils/setAuthToken";
import setConfigHeader from "../utils/setConfigHeader";

///
/// Load user with loacal storage token
///
export const loadUser = () => async dispatch => {
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

///
/// Login existing user
///
export const login = (email, password) => async dispatch => {
  const config = setConfigHeader();

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

///
/// Register new user
///
export const register = (formData, history) => async dispatch => {
  const config = setConfigHeader();

  const {
    firstName,
    lastName,
    email,
    password1,
    streetName,
    city,
    state
  } = formData;

  const address = {
    streetName,
    city,
    state,
    zipCode: parseInt(formData.zipCode)
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password: password1,
    address
  });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

///
/// Logout current user
///
export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH
  });
};

///
/// Add tickets to user
///
export const purchaseTickets = (amount, history) => async dispatch => {
  const config = setConfigHeader();

  const body = JSON.stringify({ amount });

  try {
    const res = await axios.post("api/users/me/purchaseTickets", body, config);

    dispatch({
      type: TICKETS_ADDED,
      payload: res.data
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
