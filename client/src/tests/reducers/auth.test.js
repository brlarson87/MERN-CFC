import authReducer from "../../reducers/auth";
import users from "../fixtures/users";

import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  TICKETS_ADDED,
  ENTER_SUCCESS_USER,
  USER_PLEDGE_SUCCESS,
} from "../../actions/types";

const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

describe("AUTH REDUCER", () => {
  //INITIAL REDUCER
  test("should set default state", () => {
    const state = authReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual(initialState);
  });

  //USER LOADED
  test("should load state.user and set isAuth to true", () => {
    const state = authReducer(undefined, {
      type: USER_LOADED,
      payload: users[0],
    });

    expect(state.user).toEqual(users[0]);
    expect(state.isAuthenticated).toBeTruthy();
  });

  //TICKETS ADDED
  test("should change user ticket array when tickets added", () => {
    let firstUser = users[0];
    let { tickets } = firstUser;
    let amountOfTickets = tickets.length;

    const newTickets = [
      {
        prizeId: null,
        userId: "1",
        ticketNumber: null,
      },
      {
        prizeId: null,
        userId: "1",
        ticketNumber: null,
      },
      {
        prizeId: null,
        userId: "1",
        ticketNumber: null,
      },
    ];

    tickets = [...tickets, ...newTickets];

    const updatedUser = {
      ...firstUser,
      tickets,
    };

    const state = authReducer(
      { ...initialState, isAuthenticated: true, user: users[0] },
      {
        type: TICKETS_ADDED,
        payload: newTickets,
      }
    );

    expect(state.user).toEqual(updatedUser);
    expect(state.user.tickets.length).toBe(amountOfTickets + 3);
  });

  //USER PLEDGE SUCCESS
  test("should add a pledged charity to user object", () => {
    let firstUser = users[0];
    const pledgeArray = [
      {
        prizeId: "4",
        charityId: "2",
      },
    ];
    const updatedUser = { ...firstUser, charitiesPledged: pledgeArray };

    const state = authReducer(undefined, {
      type: USER_PLEDGE_SUCCESS,
      payload: updatedUser,
    });

    expect(state.user).toEqual(updatedUser);
    expect(state.user.charitiesPledged.length).toBe(1);
    expect(state.user.charitiesPledged[0]).toEqual(pledgeArray[0]);
  });

  //AUTH ERROR -- LOGIN FAIL -- CLEAR AUTH
  test("should clear user, token, isAuth state", () => {
    const stateObject = {
      token: "token",
      isAuthenticated: true,
      loading: true,
      user: users[0],
    };

    const state = authReducer(stateObject, {
      type: AUTH_ERROR,
    });

    expect(state).toEqual({
      ...initialState,
      loading: false,
      isAuthenticated: false,
    });
  });

  //LOGIN SUCCESS -- REGISTER SUCCESS
  test("should set token and isAuth state", () => {
    const state = authReducer(initialState, {
      type: LOGIN_SUCCESS,
      payload: { token: "token" },
    });

    expect(state.token).toBe("token");
    expect(state.isAuthenticated).toBe(true);
    expect(state.loading).toBe(false);
  });

  //ENTER SUCCESS USER
  test("should update user.tickets with one ticket added", () => {
    const preState = {
      token: "token",
      isAuthenticated: true,
      loading: false,
      user: users[0],
    };

    const ticketUpdate = {
      prizeId: "4",
      userId: "1",
      ticketNumber: 9,
    };

    let { tickets } = users[0];
    const activeTickets = users[0].tickets.filter(
      (ticket) => ticket.prizeId !== null
    ).length;

    tickets[activeTickets] = ticketUpdate;

    const updatedUser = { ...users[0], tickets };

    const state = authReducer(preState, {
      type: ENTER_SUCCESS_USER,
      payload: updatedUser,
    });

    expect(state.user.tickets[activeTickets]).toEqual(ticketUpdate);
    expect(state.user.tickets[activeTickets + 1].prizeId).toBeNull();
    expect(state.user.tickets[activeTickets + 1].ticketNumber).toBeNull();
  });
});
