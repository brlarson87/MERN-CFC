import axios from "axios";
import {
  PRIZES_LOADED,
  CLEAR_PRIZES,
  PRIZE_SUCCESS,
  PRIZE_FAIL,
  ENTER_SUCCESS_PRIZE,
  ENTER_SUCCESS_USER,
  START_LOADER,
  END_LOADER,
} from "./types";
import setConfigHeader from "../utils/setConfigHeader";

export const loadPrizes = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/prizes");
    dispatch({
      type: PRIZES_LOADED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLEAR_PRIZES,
    });
  }
};

export const loadSinglePrize = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/prizes/${id}`);
    dispatch({
      type: PRIZE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: PRIZE_FAIL,
    });
  }
};

export const enterTickets = (amount, prizeId, activeUserTickets) => async (
  dispatch
) => {
  const config = setConfigHeader();
  const body = JSON.stringify({ amount, prizeId, activeUserTickets });

  try {
    const res = await axios.put("/api/interactive/enterTickets", body, config);
    dispatch({
      type: ENTER_SUCCESS_PRIZE,
      payload: res.data.prize,
    });
    dispatch({
      type: ENTER_SUCCESS_USER,
      payload: res.data.user,
    });
  } catch (error) {
    console.log("Enter Tickets Action generator error");
    console.log(error);
  }
};
