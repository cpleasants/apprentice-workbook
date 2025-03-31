// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// Should be case-insensitive.

/**
 * Check a word for double letters (case-insensitive)
 * @param {string} word
 *
 * @returns {boolean}
 */
module.exports = (word) => {
    let prev = word[0].toLowerCase()
    for (i = 1; i < word.length; i++) {
        if (word[i].toLowerCase() === prev) {
            return true
        } else {
            prev = word[i].toLowerCase()
        }
    }
    return false
}