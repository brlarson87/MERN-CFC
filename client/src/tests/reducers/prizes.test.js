import prizesReducer from "../../reducers/prizes";
import prizes from "../fixtures/prizes";

import {
  PRIZES_LOADED,
  PRIZE_SUCCESS,
  CLEAR_PRIZES,
  PRIZE_FAIL,
  ENTER_SUCCESS_PRIZE,
  PRIZE_PLEDGE_SUCCESS
} from "../../actions/types";

const initialState = {
  prizes: [],
  loading: true,
  prize: null
};

describe("MODAL REDUCER", () => {
  //INIT
  test("should set default state", () => {
    const state = prizesReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });
  //LOAD PRIZES
  test("should set state.prizes to prizes array", () => {
    const state = prizesReducer(undefined, {
      type: PRIZES_LOADED,
      payload: prizes
    });

    expect(state.prizes).toEqual(prizes);
  });

  //LOAD SINGLE PRIZE
  test("should set state.prize to selected prize", () => {
    const state = prizesReducer(
      { ...initialState, prizes },
      {
        type: PRIZE_SUCCESS,
        payload: prizes
      }
    );

    expect(state.prize).toEqual(prizes[0]);
  });

  //CLEAR PRIZES
  test("should should clear state.prizes", () => {
    const state = prizesReducer(
      { ...initialState, prizes, prize: prizes[0] },
      {
        type: CLEAR_PRIZES
      }
    );

    expect(state.prize).toBe(null);
    expect(state.prizes).toEqual([]);
  });

  //REMOVE PRIZE
  test("should make state.prize null if prize not found", () => {
    const state = prizesReducer(
      { ...initialState, prize: prizes[1] },
      {
        type: PRIZE_FAIL
      }
    );

    expect(state.prize).toBe(null);
  });

  //TICKETS ADD SUCCESS
  test("should change state.prize.prizeTotal to new amount", () => {
    let prizeOne = prizes[0];
    let prizeOneUpdated = { ...prizeOne, ticketPool: 10 };
    const state = prizesReducer(
      { ...initialState, prize: prizeOne },
      {
        type: ENTER_SUCCESS_PRIZE,
        payload: prizeOneUpdated
      }
    );

    expect(state.prize.ticketPool).toBe(10);
    expect(state.prize).toEqual(prizeOneUpdated);
  });

  //PLEDGE ENTERED SUCCESS
  test("should change state.prize.charityPool to updated array", () => {
    let prizeOne = prizes[0];
    let updatedCharityPool = [
      ...prizeOne.charityPool,
      {
        prizeId: "1",
        charityId: "3",
        name: "Marie Curie"
      }
    ];
    let prizeOneUpdated = {
      ...prizeOne,
      charityPool: updatedCharityPool
    };
    const state = prizesReducer(
      { ...initialState, prize: prizeOne },
      {
        type: PRIZE_PLEDGE_SUCCESS,
        payload: prizeOneUpdated
      }
    );

    expect(state.prize.charityPool.length).toBe(2);
    expect(state.prize.charityPool[1]).toEqual(updatedCharityPool[1]);
    expect(state.prize).toEqual(prizeOneUpdated);
  });
});
