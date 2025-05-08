// Create a function that takes in an initial word and 
// filters out an array to contain words that start with 
// the same letters as the initial word.

// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

/**
 * Find words that start with the same letters as the initial word
 * @param {string} initial
 *
 * @param {Array} words 
 */
module.exports = (initial, words) => {
  let filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < initial.length) {
      continue;
    }

    let matchCount = 0;
    for (let j = 0; j < initial.length; j++) {
      if (words[i][j].toLowerCase() === initial[j].toLowerCase()) {
        matchCount += 1;
      }
    }
    if (matchCount === initial.length) {
      filteredWords.push(words[i]);
    }
    
  }
   return filteredWords;
}