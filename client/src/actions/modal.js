import { SHOW_CHARITY_MODAL, HIDE_CHARITY_MODAL } from "./types";

export const showCharityConfirmation = (arr, charityId) => dispatch => {
  dispatch({
    type: SHOW_CHARITY_MODAL,
    payload: { arr, charityId }
  });
};

export const hideCharityConfirmation = () => dispatch => {
  dispatch({
    type: HIDE_CHARITY_MODAL
  });
};
