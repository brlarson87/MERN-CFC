import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType) => (dispatch) => {
  console.log(`Got here with ${msg} and ${alertType}`);
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType },
  });
  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT });
  }, 3000);
};
