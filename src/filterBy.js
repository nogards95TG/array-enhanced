/**
 * Filters an array of objects based on a specified key and search criteria.
 *
 * @param {Array} arr - The array of objects to be filtered.
 * @param {string} key - The key to filter the array by.
 * @param {string|Array} search - The value or array of values to search for in the specified key.
 * @returns {Array} - A new array containing only the objects that match the search criteria.
 */
const filterBy = (arr, key, search) =>
  Array.isArray(search)
    ? arr.filter((item) => search.includes(item[key]))
    : arr.filter((item) => item[key] === search);

module.exports = filterBy;
