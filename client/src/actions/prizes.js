import axios from "axios";
import {
  PRIZES_LOADED,
  CLEAR_PRIZES,
  PRIZE_SUCCESS,
  PRIZE_FAIL,
  ENTER_SUCCESS_PRIZE,
  ENTER_SUCCESS_USER,
  LOAD_RESULT,
} from "./types";
import setConfigHeader from "../utils/setConfigHeader";
//import { setAlert } from "./alert";

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
      type: ENTER_SUCCESS_USER,
      payload: res.data.user,
    });
    dispatch({
      type: ENTER_SUCCESS_PRIZE,
      payload: { prize: res.data.prize, prizes: res.data.allActivePrizes },
    });
  } catch (error) {
    console.log("Enter Tickets Action generator error");
    console.log(error);
  }
};

//***********************************************************************//
//******************LOAD RESULT FOR FILLED POOLS************************//

export const loadResult = (prizeId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/results/${prizeId}`);

    dispatch({
      type: LOAD_RESULT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
