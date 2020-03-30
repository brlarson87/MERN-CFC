import { utilFilter, totalCountOfCharities } from "../../utils/utilFilter";

import charities from "../fixtures/charities";

describe("CHARITY FILTER UTIL", () => {
  //UTIL FILTER
  it("should return array of charities that contain empty filter", () => {
    const res = utilFilter(charities, "");

    expect(res).toEqual(charities);
  });

  it("should return array of charities that contain wounded", () => {
    const res = utilFilter(charities, "WoUnDed");

    expect(res).toEqual([charities[1]]);
  });

  it("should return empty array because the filter isn't found", () => {
    const res = utilFilter(charities, "zZzZ");

    expect(res).toEqual([]);
  });

  it("should return multiple charities from a common filter", () => {
    const res = utilFilter(charities, "se");

    expect(res).toEqual([
      charities[0],
      charities[6],
      charities[19],
      charities[20],
      charities[25]
    ]);
  });

  //TOTAL COUNT OF CHARITIES
  it("should return the correct number of charities after filtering", () => {
    // EMPTY FILTER
    const res1 = totalCountOfCharities(charities, "");

    // COMPLICATED FILTER
    const res2 = totalCountOfCharities(charities, "WoUnDed");

    // NOT FOUND
    const res3 = totalCountOfCharities(charities, "zZzZ");

    // NOT FOUND
    const res4 = totalCountOfCharities(charities, "se");

    expect(res1).toBe(29);
    expect(res2).toBe(1);
    expect(res3).toBe(0);
    expect(res4).toBe(5);
  });
});
