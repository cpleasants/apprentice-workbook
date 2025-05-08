// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.

/**
 * Returns the number of sub-arrays with identical elements
 * @param {Array.<Array.<number>>} arr two dimensional array
 *
 * @returns {number} number of sub-arrays with identical elements
 */
module.exports = (arr) => {
    function identical(sub_arr) {
        let first = sub_arr[0]
        for (i = 1; i < sub_arr.length; i++) {
            if (sub_arr[i] !== first) {
                return 0
            }
        }
        return 1
    }
    let ident_arr = arr.map(sub_arr => identical(sub_arr))
    return ident_arr.reduce((a, b) => a + b, 0)
    
}
