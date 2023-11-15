/**
 * Creates a new array with unique elements from the source array.
 *
 * @param {Array} src - The source array containing elements to make unique.
 * @returns {Array} - A new array with unique elements in the same order as the original array.
 */
const uniq = (src = []) => Array.from(new Set(src));

module.exports = uniq;
