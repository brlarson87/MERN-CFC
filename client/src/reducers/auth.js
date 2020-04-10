import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  CLEAR_AUTH,
  TICKETS_ADDED,
  ENTER_SUCCESS_USER,
  USER_PLEDGE_SUCCESS,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
    case USER_PLEDGE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case TICKETS_ADDED:
      return {
        ...state,
        user: {
          ...state.user,
          tickets: [...state.user.tickets, ...payload],
        },
        loading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case CLEAR_AUTH:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case ENTER_SUCCESS_USER:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
}
