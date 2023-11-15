/**
 * Picks non-empty values from an array of objects based on a specified key.
 *
 * @param {Array} src - The source array of objects.
 * @param {string} key - The key used to filter and extract values from each object.
 * @returns {Array} - A new array containing non-empty values extracted from the specified key.
 */
const pickNotEmpty = (src = [], key) =>
  src
    .filter((item) => item[key] !== null && item[key] !== undefined)
    .map((item) => item[key]);

module.exports = pickNotEmpty;
