// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.

/**
 * Returns the nth Fibonacci number
 * @param {number} n 
 *
 * @returns {number} nth Fibonacci number
 */
module.exports = (n) => {
    if (n === 0 | n === 1) {
        return n; // 0th number is 0, 1st number is 1, so just return n
    }
    let prevTwo = [0, 1];
    for (let i = 2; i <= n; i++) {
      prevTwo.push(prevTwo[0] + prevTwo[1]);
      prevTwo.shift();
    }
    return prevTwo[1];
}