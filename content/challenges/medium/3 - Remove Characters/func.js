// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

/**
 * this function removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and returns the new string.
 * @param {string} str
 *
 * @returns {string}
 */
module.exports = (str) => {
  const re = /[a-zA-Z0-9-_\. ]+/g;
  return (str.match(re).join(''));
}
