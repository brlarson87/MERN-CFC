import axios from "axios";
import { CHARITIES_LOADED } from "./types";

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
  //console.log({ prizeId, charityId });
  const config = setConfigHeader();
  const body = JSON.stringify({ prizeId, charityId });

  try {
    const res = await axios.put("/api/interactive/enterCharity", body, config);
    console.log("Success!");
  } catch (error) {
    console.log("Enter Charity Action generator error");
    console.log(error);
  }
};
