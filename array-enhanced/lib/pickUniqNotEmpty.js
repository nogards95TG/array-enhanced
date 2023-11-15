const uniq = require("./uniq");

/**
 * Picks unique and non-empty values from an array of objects based on a specified key.
 *
 * @param {Array} src - The source array of objects.
 * @param {string} key - The key used to filter and extract values from each object.
 * @returns {Array} - A new array containing unique and non-empty values extracted from the specified key.
 */
const pickUniqNotEmpty = (src = [], key) =>
  uniq(
    src
      .filter((item) => item[key] !== null && item[key] !== undefined)
      .map((item) => item[key])
  );

module.exports = pickUniqNotEmpty;
