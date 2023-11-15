const { difference } = require("../index");

describe("/**** *** ** Difference ** *** ****/", () => {
  it("should correctly find elements unique to the source array", () => {
    const result1 = difference([1, 2, 3, 4, 5], [3, 4, 5, 6]);
    expect(result1).toEqual([1, 2]);

    const result2 = difference(["a", "b", "c"], ["b"]);
    expect(result2).toEqual(["a", "c"]);
  });

  it("should handle empty arrays", () => {
    const result3 = difference([], [1, 2, 3]);
    expect(result3).toEqual([]);

    const result4 = difference([1, 2, 3], []);
    expect(result4).toEqual([1, 2, 3]);

    const result5 = difference([], []);
    expect(result5).toEqual([]);
  });

  it("should handle arrays with different data types", () => {
    const result6 = difference([1, "two", { three: 3 }], ["two", { three: 3 }]);
    expect(result6).toEqual([1]);
  });

  it("should return an empty array if both arrays have the same elements", () => {
    const result7 = difference([1, 2, 3], [1, 2, 3]);
    expect(result7).toEqual([]);
  });
});
