// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.

/**
 * Returns the missing number from an array of numbers between 1 and 10
 * @param {Array} arr
 *
 * @returns {Number} the missing number
 */
module.exports = (arr) => {
  let arrSum = arr.reduce((total, item) => (total + item), 0);
  let expectedSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  return expectedSum - arrSum;
}