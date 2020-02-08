import {
  loadUser,
  login,
  register,
  logout,
  purchaseTickets
} from "../../actions/auth";
import { CLEAR_AUTH } from "../../actions/types";

test("should setup logout user action object", () => {
  let dispatch = jest.fn();
  const action = logout();
  expect(dispatch).toHaveBeenLastCalledWith({
    type: CLEAR_AUTH
  });
});
