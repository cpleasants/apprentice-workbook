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
  
  if (int1 % int2 === 0) {
    return int2;
  } else if (int2 % int1 === 0) {
    return int1;
  }
  
  let greater;
  let lesser;
  if (int1 > int2) {
      greater = int1;
      lesser = int2;
  } else {
      greater = int2;
      lesser = int1;
  }

  let remainder = greater % lesser;
  while (remainder !== 0) {
      greater = lesser;
      lesser = remainder;
      remainder = greater % lesser;
  }
  return lesser
}
