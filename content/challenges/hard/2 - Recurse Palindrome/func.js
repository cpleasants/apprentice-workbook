// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
// A recursive function is a function that calls itself

/**
 * Determines if a string is a palindrome
 * @param {string} str 
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
module.exports = (str) => {
  function symmetryCheck(lettersArray) {
    if (lettersArray.length <= 1) {
      return true;
    }
    if (lettersArray.shift() === lettersArray.pop()) {
      return symmetryCheck(lettersArray);
    } else {
      return false;
    }
  }

  return symmetryCheck(str.split(''));
}
