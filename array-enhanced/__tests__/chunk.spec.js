const { chunk } = require("../index");

describe("/**** *** ** Chunk ** *** ****/", () => {
  it("should correctly chunk the array into subarrays", () => {
    const result1 = chunk([1, 2, 3, 4, 5], 2);
    expect(result1).toEqual([[1, 2], [3, 4], [5]]);

    const result2 = chunk(["a", "b", "c", "d"], 3);
    expect(result2).toEqual([["a", "b", "c"], ["d"]]);

    const result3 = chunk([1, 2, 3, 4], 2);
    expect(result3).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should handle empty array input", () => {
    const result = chunk([], 2);
    expect(result).toEqual([]);
  });

  it("should handle chunk size larger than array length", () => {
    const result = chunk([1, 2, 3], 5);
    expect(result).toEqual([[1, 2, 3]]);
  });
});
