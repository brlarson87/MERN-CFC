import userTickets from "../../utils/userTickets";
import users from "../fixtures/users";

describe("USER TICKETS UTIL", () => {
  it("should return 0 for user with no match tickets to prizeId", () => {
    //USERS[0] + "2"
    const result = userTickets(users[0].tickets, "2");

    expect(result).toBe(0);
  });

  it("should return 8 for the prize id of 4", () => {
    //USERS[0] + "4"
    const result = userTickets(users[0].tickets, "4");

    expect(result).toBe(8);
  });

  it("should return 5 for the prize id of 1", () => {
    //USERS[1] + "1"
    const result = userTickets(users[1].tickets, "1");

    expect(result).toBe(5);
  });
});
