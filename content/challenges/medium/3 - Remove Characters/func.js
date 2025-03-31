// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

/**
 * this function removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and returns the new string.
 * @param {string} str
 *
 * @returns {string}
 */
module.exports = (str) => {
    allowed = "abcdefghijklmnopqrstuvwxyz0123456789-_ ."
    let out_str = '';
    for (i = 0; i < str.length; i++) {
        if (allowed.includes(str[i].toLowerCase())) {
            out_str += str[i]
        }
    }
    return out_str
    // Could also use regular expressions
}
