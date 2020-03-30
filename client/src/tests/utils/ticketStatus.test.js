import ticketStatus from "../../utils/ticketStatus";
import users from "../fixtures/users";

describe("TICKET STATUS UTILS", () => {
  it("should return an object with correct active and live numbers", () => {
    //USERS[0]
    const userOne = ticketStatus(users[0].tickets);
    //USERS[1]
    const userTwo = ticketStatus(users[1].tickets);

    expect(userOne).toEqual({ active: 2, live: 8 });
    expect(userTwo).toEqual({ active: 0, live: 10 });
  });
});
