import modalReducer from "../../reducers/modal";
import prizes from "../fixtures/prizes";
import users from "../fixtures/users";

import {
  SHOW_CHARITY_MODAL,
  HIDE_CHARITY_MODAL,
  SHOW_CONFIRM_MODAL,
  HIDE_CONFIRM_MODAL
} from "../../actions/types";

const initialState = {
  loading: true,
  show: false,
  content: [],
  charityId: undefined,
  showConfirm: false,
  confirmContent: {}
};

describe("MODAL REDUCER", () => {
  //INITIAL REDUCER
  test("should set default state", () => {
    const state = modalReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });

  //SHOW CHARITY MODAL
  test("should change show state to true and fill content array and set charityId", () => {
    const content = [prizes[0], prizes[3]];
    const charityId = 3;

    const state = modalReducer(undefined, {
      type: SHOW_CHARITY_MODAL,
      payload: { arr: content, charityId }
    });

    expect(state.loading).toBeFalsy();
    expect(state.show).toBeTruthy();
    expect(state.content).toEqual(content);
    expect(state.charityId).toBe(charityId);
  });

  //HIDE CHARITY MODAL
  test("should change show state to false and clear content array and charityId", () => {
    const preState = {
      ...initialState,
      loading: false,
      show: true,
      content: [prizes[0], prizes[3]],
      charityId: 3
    };

    const state = modalReducer(preState, {
      type: HIDE_CHARITY_MODAL
    });

    expect(state.loading).toBeFalsy();
    expect(state.show).toBeFalsy();
    expect(state.content).toEqual([]);
    expect(state.charityId).toBeUndefined();
  });

  //SHOW CONFIRM MODAL
  test("should change showConfirm to true and populate confirmContent object", () => {
    const payload = {
      ticketAmount: 2,
      prizeId: "1",
      activeTickets: [users[0].tickets[9], users[0].tickets[8]],
      prizeName: "prize name"
    };

    const state = modalReducer(undefined, {
      type: SHOW_CONFIRM_MODAL,
      payload
    });

    expect(state.loading).toBeFalsy();
    expect(state.showConfirm).toBeTruthy();
    expect(state.confirmContent).toEqual(payload);
  });

  //HIDE CONFIRM MODAL
  test("should change show state to false and clear content array and charityId", () => {
    const content = {
      ticketAmount: 2,
      prizeId: "1",
      activeTickets: [users[0].tickets[9], users[0].tickets[8]],
      prizeName: "prize name"
    };

    const preState = {
      ...initialState,
      showConfirm: true,
      confirmContent: content
    };

    const state = modalReducer(preState, {
      type: HIDE_CONFIRM_MODAL
    });

    expect(state.loading).toBeFalsy();
    expect(state.showConfirm).toBeFalsy();
    expect(state.confirmContent).toEqual({});
  });
});
