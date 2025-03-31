// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.

/**
 * Returns the greatest common divisor (GCD) of two integers.
 * @param {number} int1 
 * @param {number} int2 
 *
 * @returns {number} GCD
 */
module.exports = (int1, int2) => {
    let greater;
    let lesser;
    if (int1 > int2) {
        greater = int1;
        lesser = int2;
    } else {
        greater = int2;
        lesser = int1;
    }
    // function gcd(greater, lesser) {
    //     let remainder = greater % lesser;
    //     if (remainder === 0) {
    //         return lesser
    //     } else {
    //         return gcd(lesser, remainder)
    //     }
    // }
    // return gcd(greater, lesser)
    let remainder = greater % lesser
    while (remainder !== 0) {
        greater = lesser
        lesser = remainder
        remainder = greater % lesser
    }
    return lesser
}
