// Create a function that takes an array of numbers between 1 and n (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.

/**
 * Returns the missing number from an array of numbers between 1 and some number n minus one missing number
 * @param {Array} arr
 *
 * @returns {Number} the missing number
 */
module.exports = (arr) => {
    let expectedNumbers = [];
    for (let i = 1; i <= arr.length + 1; i++) {
        expectedNumbers.push(i);
    }
    return expectedNumbers.filter(n => !arr.includes(n))[0];
}