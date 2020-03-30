import alertReducer from "../../reducers/alert";

import { SET_ALERT, REMOVE_ALERT } from "../../actions/types";

const initialState = {
  msg: "",
  alertType: ""
};

const alert = {
  msg: "Welcome back!",
  alertType: "success alert--main-page"
};

describe("ALERT MODAL", () => {
  //INITIAL REDUCER
  test("should set default state", () => {
    const state = alertReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });
  //SET ALERT
  test("should set new alert", () => {
    const state = alertReducer(undefined, {
      type: SET_ALERT,
      payload: alert
    });

    expect(state).toEqual(alert);
  });

  //REMOVE ALERT
  test("should clear current alert object", () => {
    const state = alertReducer(alert, {
      type: REMOVE_ALERT
    });

    expect(state).toEqual(initialState);
  });
});
