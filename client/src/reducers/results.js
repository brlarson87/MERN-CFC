import { LOAD_RESULT } from "../actions/types";

const initialState = {
  result: undefined,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_RESULT:
      return { ...state, result: payload };
    default:
      return state;
  }
}
