import axios from "axios";
import {
  CHARITIES_LOADED,
  USER_PLEDGE_SUCCESS,
  PRIZE_PLEDGE_SUCCESS
} from "./types";

import setConfigHeader from "../utils/setConfigHeader";

export const loadCharities = () => async dispatch => {
  try {
    const res = await axios.get("/api/charity");
    dispatch({
      type: CHARITIES_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const enterCharity = (prizeId, charityId) => async dispatch => {
  const config = setConfigHeader();
  const body = JSON.stringify({ prizeId, charityId });

  try {
    const res = await axios.put("/api/interactive/enterCharity", body, config);

    dispatch({
      type: USER_PLEDGE_SUCCESS,
      payload: res.data.user
    });

    dispatch({
      type: PRIZE_PLEDGE_SUCCESS,
      payload: res.data.prize
    });
  } catch (error) {
    console.log("Enter Charity Action generator error");
    console.log(error);
  }
};
