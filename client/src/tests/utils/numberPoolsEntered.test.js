import {
  numberPoolsEntered,
  enteredPrizes,
  atLeastOnePool,
  ticketsInCertainPool,
  formatTicketNumber
} from "../../utils/numberPoolsEntered";

import users from "../fixtures/users";
import prizes from "../fixtures/prizes";

describe("NUMBER POOLS ENTERED UTILS", () => {
  //NUMBER POOLS ENTERED
  it("should return a number of unique prizes that user has entered", () => {
    //USERS[0]
    const firstUserAmount = numberPoolsEntered(users[0].tickets);

    //USERS[1]
    const secondUserAmount = numberPoolsEntered(users[1].tickets);

    expect(firstUserAmount).toBe(1);
    expect(secondUserAmount).toBe(2);
  });

  //ENTERED PRIZES
  it("should return an array of ever prize the user has entered", () => {
    //USERS[0]
    const firstUser = enteredPrizes(users[0].tickets, prizes);

    //USERS[1]
    const secondUser = enteredPrizes(users[1].tickets, prizes);

    expect(firstUser.length).toBe(1);
    expect(secondUser.length).toBe(2);
    expect(firstUser).toEqual([prizes[3]]);
    expect(secondUser).toEqual([prizes[0], prizes[2]]);
  });

  //AT LEAST ONE POOL
  it("should return true if they have entered and false if they haven't", () => {
    //USER[0]
    const firstUserEntered = atLeastOnePool(users[0].tickets);

    //EMPTY TICKETS ARRAY
    const emptyTicketArray = atLeastOnePool([]);

    expect(firstUserEntered).toBeTruthy();
    expect(emptyTicketArray).toBeFalsy();
  });

  //TICKETS IN CERTAIN POOL
  it("should return all ticket objects in a certain pool", () => {
    //USER[0] + PRIZES[0]._id
    const firstUserFirstPrize = ticketsInCertainPool(
      users[0].tickets,
      prizes[0]._id
    );
    //USER[0] + PRIZES[3]._id
    const firstUserFourthPrize = ticketsInCertainPool(
      users[0].tickets,
      prizes[3]._id
    );
    //USER[1] + PRIZES[0]._id
    const secondUserFirstPrize = ticketsInCertainPool(
      users[1].tickets,
      prizes[0]._id
    );
    //USER[1] + PRIZES[1]._id
    const secondUserSecondPrize = ticketsInCertainPool(
      users[1].tickets,
      prizes[1]._id
    );

    expect(firstUserFirstPrize).toEqual([]);
    expect(firstUserFourthPrize.length).toBe(8);
    expect(firstUserFourthPrize).toEqual(users[0].tickets.slice(0, 8));
    expect(secondUserFirstPrize.length).toBe(5);
    expect(secondUserFirstPrize).toEqual(users[1].tickets.slice(0, 5));
    expect(secondUserSecondPrize).toEqual([]);
  });

  //FORMAT TICKET NUMBER
  it("should return a string with correct number of characters with 0s where needed", () => {
    //NUMBER 12 + TOTAL 80000 === "00012"
    const res1 = formatTicketNumber(12, 80000);

    //NUMBER 120 + TOTAL 80000 === "00120"
    const res2 = formatTicketNumber(120, 80000);

    //NUMBER 1201 + TOTAL 80000 === "01201"
    const res3 = formatTicketNumber(1201, 80000);

    //NUMBER 12011 + TOTAL 80000 === "12011"
    const res4 = formatTicketNumber(12011, 80000);

    //NUMBER 5 + TOTAL 80000 === "00005"
    const res5 = formatTicketNumber(5, 80000);

    expect(res1).toBe("00012");
    expect(res2).toBe("00120");
    expect(res3).toBe("01201");
    expect(res4).toBe("12011");
    expect(res5).toBe("00005");
  });
});
