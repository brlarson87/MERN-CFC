import { START_LOADER, END_LOADER } from "../actions/types";

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case START_LOADER:
      return { ...state, loading: true };
    case END_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
