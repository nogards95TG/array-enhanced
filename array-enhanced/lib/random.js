/**
 * Returns a random element from the given array.
 *
 * @param {Array} src - The source array from which to select a random element.
 * @returns {*} - A randomly selected element from the source array.
 */
const random = (src = []) => src[Math.floor(Math.random() * src.length)];

module.exports = random;
