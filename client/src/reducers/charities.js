import { CHARITIES_LOADED } from "../actions/types";

const initialState = {
  charities: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHARITIES_LOADED:
      return {
        ...state,
        charities: payload,
        loading: false
      };
    default:
      return state;
  }
}
