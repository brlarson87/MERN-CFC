import { SHOW_CHARITY_MODAL, HIDE_CHARITY_MODAL } from "../actions/types";

const initialState = {
  loading: true,
  show: false,
  content: [],
  charityId: undefined
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
    default:
      return state;
  }
}
