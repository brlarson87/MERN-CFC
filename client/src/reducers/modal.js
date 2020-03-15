import {
  SHOW_CHARITY_MODAL,
  HIDE_CHARITY_MODAL,
  SHOW_CONFIRM_MODAL,
  HIDE_CONFIRM_MODAL
} from "../actions/types";

const initialState = {
  loading: true,
  show: false,
  content: [],
  charityId: undefined,
  showConfirm: false,
  confirmContent: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_CHARITY_MODAL:
      return {
        ...state,
        loading: false,
        show: true,
        content: payload.arr,
        charityId: payload.charityId
      };
    case HIDE_CHARITY_MODAL:
      return {
        ...state,
        loading: false,
        show: false,
        content: [],
        charityId: undefined
      };
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        loading: false,
        showConfirm: true,
        confirmContent: {
          ticketAmount: payload.ticketAmount,
          prizeId: payload.prizeId,
          activeTickets: payload.activeTickets,
          prizeName: payload.prizeName
        }
      };
    case HIDE_CONFIRM_MODAL:
      return {
        ...state,
        loading: false,
        showConfirm: false,
        confirmContent: {}
      };
    default:
      return state;
  }
}
