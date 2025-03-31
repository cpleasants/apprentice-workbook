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
    for (i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) {
            return i
        }
    }
    // let notIncluded = [1,2,3,4,5,6,7,8,9,10].filter(v => !arr.includes(v))
    // return notIncluded[0]
}