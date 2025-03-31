// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.

/**
 * Check if a string is a palindrome.
 * @param {string} str 
 *
 * @returns {boolean}
 */
module.exports = (str) => {
    let backwards = ''
    for (i = str.length - 1; i >= 0; i--) {
        backwards += str[i]
    }
    return str === backwards
}