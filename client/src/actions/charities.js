import axios from "axios";
import { CHARITIES_LOADED } from "./types";

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
