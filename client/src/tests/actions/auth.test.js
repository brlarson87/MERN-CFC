// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";

// Action creators
import {
  loadUser,
  login,
  register,
  logout,
  purchaseTickets
} from "../../actions/auth";
import { CLEAR_AUTH } from "../../actions/types";

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// LOGOUT ACTION
describe("**AUTH ACTIONS**", () => {
  test("should setup logout user action object", () => {
    // const initialState = {};
    // const store = mockStore(initialState);
    // store.dispatch(logout);
    // const actions = store.getActions();
    // const expectedPayload = { type: CLEAR_AUTH };
    // expect(actions).toEqual([expectedPayload]);
  });
});
