// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.

/**
 * Reverse the words in a string that are five or more characters long
 * @param {string} str 
 *
 * @returns {string} The string with the proper words reversed
 */
module.exports = (str) => {
    words = str.split(" ")
    let rev_words = []
    for (i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            let word = words[i]
            let rev_word = ''
            for (j = word.length - 1; j >= 0; j--) {
                rev_word += word[j]
            }
            rev_words.push(rev_word)
        } else {
            rev_words.push(words[i])
        }
       
    }
    return rev_words.join(" ")
}