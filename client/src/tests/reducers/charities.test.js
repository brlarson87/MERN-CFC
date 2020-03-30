import charitiesReducer from "../../reducers/charities";
import charities from "../fixtures/charities";
import { CHARITIES_LOADED } from "../../actions/types";

const initialState = {
  charities: [],
  loading: true
};

describe("CHARITIES REDUCER", () => {
  //INITIAL REDUCER
  test("should set default state", () => {
    const state = charitiesReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });

  //INITIAL REDUCER
  test("should load the charities array and switch loading", () => {
    const state = charitiesReducer(undefined, {
      type: CHARITIES_LOADED,
      payload: charities
    });

    expect(state.charities).toEqual(charities);
    expect(state.loading).toBeFalsy();
  });
});
