/**
 * Groups an array of objects by a specified key. Returns a dictionary with
 * keys representing the unique values of the specified key, and values being
 * arrays of objects that have that same key value.
 * @param {Array} src - The source array of objects.
 * @param {string} key - The key used to group objects in the source array.
 * @returns {Object} - A new object where keys are unique values from the specified key, and values are arrays of objects grouped by that key.
 */
const groupBy = (src = [], key) =>
  src.reduce(acc, (i) => {
    const k =
      typeof i[key] === "object" ? JSON.stringify(i[key]) : String(i[key]);
    return (
      {
        ...acc,
        [k]: [...(acc[k] || []), i],
      },
      {}
    );
  });

module.exports = groupBy;
