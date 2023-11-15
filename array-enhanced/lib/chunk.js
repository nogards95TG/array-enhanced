/**
 * Splits an array into chunks of a specified size and returns a new array of chunked arrays.
 *
 * @param {Array} src - The source array to be chunked.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - A new array containing chunked arrays.
 */
const chunk = (src = [], size) => {
  const chunks = new Array();
  for (let i = 0; i < src.length; i += size)
    chunks.push(src.slice(i, i + size));
  return chunks;
};

module.exports = chunk;
