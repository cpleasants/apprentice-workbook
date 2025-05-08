// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

/**
 * Remove duplicate consecutive letters from a word
 * @param {string} word 
 *
 * @returns {string}
 */
module.exports = (word) => {
    let out_word = '';
    for (i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            out_word += word[i];
        }
    }
    return out_word
}