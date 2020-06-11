import resultsReducer from "../../reducers/results";
import results from "../fixtures/results";
import { LOAD_RESULT } from "../../actions/types";

const initialState = {
  result: undefined,
};

describe("RESULTS REDUCER", () => {
  //INITIAL REDUCER
  test("should set default state", () => {
    const state = resultsReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });

  //INITIAL REDUCER
  test("should load the result", () => {
    const state = resultsReducer(undefined, {
      type: LOAD_RESULT,
      payload: results[0],
    });

    expect(state.result).toEqual(results[0]);
  });
});
