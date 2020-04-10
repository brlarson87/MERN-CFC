import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

export const mock = new MockAdapter(axios);

export const store = mockStore({});
