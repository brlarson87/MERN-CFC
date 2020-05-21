import {
  SHOW_CHARITY_MODAL,
  HIDE_CHARITY_MODAL,
  SHOW_CONFIRM_MODAL,
  HIDE_CONFIRM_MODAL,
} from "./types";

export const showCharityConfirmation = (arr, charityId, charityName) => (
  dispatch
) => {
  dispatch({
    type: SHOW_CHARITY_MODAL,
    payload: { arr, charityId, charityName },
  });
};

export const hideCharityConfirmation = () => (dispatch) => {
  dispatch({
    type: HIDE_CHARITY_MODAL,
  });
};

export const showConfirmModal = (
  ticketAmount = undefined,
  prizeId = undefined,
  activeTickets = undefined,
  prizeName = undefined,
  thumbnail = undefined
) => (dispatch) => {
  dispatch({
    type: SHOW_CONFIRM_MODAL,
    payload: { ticketAmount, prizeId, activeTickets, prizeName, thumbnail },
  });
};

export const hideConfirmModal = () => (dispatch) => {
  dispatch({
    type: HIDE_CONFIRM_MODAL,
  });
};
