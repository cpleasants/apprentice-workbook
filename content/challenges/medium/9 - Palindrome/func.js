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
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
    return true;
}