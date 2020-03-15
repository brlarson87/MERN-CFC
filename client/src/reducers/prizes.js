import {
  PRIZES_LOADED,
  CLEAR_PRIZES,
  PRIZE_SUCCESS,
  PRIZE_FAIL,
  ENTER_SUCCESS_PRIZE,
  PRIZE_PLEDGE_SUCCESS
} from "../actions/types";

const initialState = {
  prizes: [],
  loading: true,
  prize: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRIZES_LOADED:
      return {
        ...state,
        prizes: payload,
        loading: false
      };
    case PRIZE_SUCCESS:
      return {
        ...state,
        loading: false,
        prize: payload[0]
      };
    case CLEAR_PRIZES:
      return {
        ...state,
        prizes: [],
        loading: false,
        prize: null
      };
    case PRIZE_FAIL:
      return {
        ...state,
        loading: false,
        prize: null
      };
    case ENTER_SUCCESS_PRIZE:
    case PRIZE_PLEDGE_SUCCESS:
      return {
        ...state,
        loading: false,
        prize: payload
      };
    default:
      return state;
  }
}
