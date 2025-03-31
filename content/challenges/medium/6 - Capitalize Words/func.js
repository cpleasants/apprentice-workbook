// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.

/**
 * Converts the first character of each word to uppercase.
 * @param {string} str 
 *
 * @returns {string}
 */
module.exports = (str) => {
    words = str.split(" ");
    out_words = []
    for (i = 0; i < words.length; i++) {
        let word = words[i]
        out_words.push(word[0].toUpperCase() + word.slice(1))
    }
    return out_words.join(" ")
}