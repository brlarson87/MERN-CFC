// Action creators
import {
  loadUser,
  login,
  register,
  logout,
  purchaseTickets,
} from "../../actions/auth";

//Types
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_AUTH,
  REGISTER_SUCCESS,
  TICKETS_ADDED,
} from "../../actions/types";

import { mock, store } from "../__mocks__/axiosReduxMock";

// LOGOUT ACTION
describe("**AUTH ACTIONS**", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("should dispatch CLEAR_AUTH action object", () => {
    const expectedAction = { type: CLEAR_AUTH };
    store.dispatch(logout());

    expect(store.getActions()).toEqual([expectedAction]);
  });

  test("should dispatch LOGIN_FAIL action object", () => {
    const expectedAction = { type: LOGIN_FAIL };
    store.dispatch(logout());

    expect(store.getActions()).toEqual([expectedAction]);
  });
});
