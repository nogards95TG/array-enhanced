/**
 * Finds the difference between two arrays and returns a new array with elements unique to the source array.
 *
 * @param {Array} src - The source array for comparison.
 * @param {Array} compare - The array to compare with the source array.
 * @returns {Array} - A new array containing elements found only in the source array and not in the compare array.
 */
const difference = (src = [], compare = []) =>
  src.filter((item) =>
    compare.every((_item) =>
      typeof item === "object"
        ? JSON.stringify(item) !== JSON.stringify(_item)
        : item !== _item
    )
  );

module.exports = difference;
