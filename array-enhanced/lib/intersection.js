/**
 * Finds the intersection of two arrays and returns a new array with common elements.
 *
 * @param {Array} src - The source array for comparison.
 * @param {Array} compare - The array to compare with the source array.
 * @returns {Array} - A new array containing common elements found in both source and compare arrays.
 */
const intersection = (src = [], compare = []) =>
  src.filter((item) =>
    compare.some((_item) =>
      typeof item === "object"
        ? JSON.stringify(item) === JSON.stringify(_item)
        : item === _item
    )
  );

module.exports = intersection;
