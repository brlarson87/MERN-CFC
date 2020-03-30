import chunks from "../../utils/chunks";
import prizes from "../fixtures/prizes";

describe("CHUNKS UTIL", () => {
  it("should return two arrays with two prizes each", () => {
    const result = chunks(prizes);

    expect(result).toEqual([
      [prizes[0], prizes[1]],
      [prizes[2], prizes[3]]
    ]);
  });

  it("should return empty array when no prizes are entered", () => {
    const result = chunks();

    expect(result).toEqual([]);
  });
});
