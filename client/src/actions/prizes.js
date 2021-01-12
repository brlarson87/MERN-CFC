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


export const enterTickets = (amount, prizeId) => async (
  dispatch
) => {
  const config = setConfigHeader();
  const body = JSON.stringify({ amount, prizeId });

  try {
    const res = await axios.put("/api/interactive/enterTickets", body, config);

    let { activeReturn, prize, allActivePrizes } = res.data;

    dispatch({
      type: ENTER_SUCCESS_USER,
      payload: { activeReturn, amount: activeReturn.length },
    });
    
    dispatch({
      type: ENTER_SUCCESS_PRIZE,
      payload: { prize, allActivePrizes },
    });
 

  } catch (error) {
    console.log("Enter Tickets Action generator error");
    console.log(error);
  }
};

//***********************************************************************//
//******************LOAD RESULT FOR FILLED POOLS************************//

export const loadResultAndPrize = (prizeId) => async (dispatch) => {
  try {
    const res1 = await axios.get(`/api/results/${prizeId}`);
    const res2 = await axios.get(`/api/prizes/${prizeId}`);

    dispatch({
      type: LOAD_RESULT,
      payload: res1.data,
    });

    dispatch({
      type: PRIZE_SUCCESS,
      payload: res2.data,
    });
  } catch (error) {
    console.log(error);
  }
};
