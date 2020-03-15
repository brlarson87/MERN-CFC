import {
  SHOW_CHARITY_MODAL,
  HIDE_CHARITY_MODAL,
  SHOW_CONFIRM_MODAL,
  HIDE_CONFIRM_MODAL
} from "./types";

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

export const showConfirmModal = (
  ticketAmount,
  prizeId,
  activeTickets,
  prizeName
) => dispatch => {
  dispatch({
    type: SHOW_CONFIRM_MODAL,
    payload: { ticketAmount, prizeId, activeTickets, prizeName }
  });
};

export const hideConfirmModal = () => dispatch => {
  dispatch({
    type: HIDE_CONFIRM_MODAL
  });
};
