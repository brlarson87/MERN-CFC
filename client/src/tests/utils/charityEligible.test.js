import { checkIfEligibleForPledge } from "../../utils/charityEligible";
import users from "../fixtures/users";
import prizes from "../fixtures/prizes";

describe("CHECK ELIGIBLE + ELIGIBLE PRIZES", () => {
  //UNELIGIBLE
  it("should return not eligible to pledge and empty prize array", () => {
    const result = checkIfEligibleForPledge(
      users[2].tickets,
      prizes,
      users[2].charitiesPledged
    );

    expect(result).toEqual({ eligible: false, prizesEligibleFor: [] });
  });

  //ELIGIBLE + ALREADY PLEDGED + ANOTHER ELIGIBLE PRIZE
  it("should return eligible to pledge and one eligible prize to enter it", () => {
    const charityArray = [
      {
        prizeID: prizes[2]._id,
        thumbnail: prizes[2].pictures[0]
      }
    ];

    const result = checkIfEligibleForPledge(
      users[1].tickets,
      prizes,
      users[1].charitiesPledged
    );

    expect(result).toEqual({
      eligible: true,
      prizesEligibleFor: charityArray
    });
  });

  //ELIGIBLE FOR MULTIPLE PRIZES
  it("should return eligible to pledge and two prizes in prizesEligibleFor array", () => {
    const result = checkIfEligibleForPledge(
      users[3].tickets,
      prizes,
      users[3].charitiesPledged
    );

    expect(result.eligible).toBeTruthy();
    expect(result.prizesEligibleFor.length).toBe(2);
    expect(result.prizesEligibleFor).toEqual([
      { prizeID: prizes[0]._id, thumbnail: prizes[0].pictures[0] },
      { prizeID: prizes[3]._id, thumbnail: prizes[3].pictures[0] }
    ]);
  });

  //UNELIGIBLE WITH CHARITES ALREADY PLEDGED
  it("should return not eligible to pledge and empty prize array", () => {
    const result = checkIfEligibleForPledge(
      users[4].tickets,
      prizes,
      users[4].charitiesPledged
    );

    expect(result).toEqual({ eligible: false, prizesEligibleFor: [] });
  });
});
