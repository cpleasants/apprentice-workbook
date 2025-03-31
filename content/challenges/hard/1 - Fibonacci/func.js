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
        return n // 0th number is 0, 1st number is 1, so just return n
    }
    let two_back = 0
    let one_back = 1
    let fib_num = 1
    for (i = 2; i < n; i++) {
        two_back = one_back;
        one_back = fib_num;
        fib_num = two_back + one_back
    }
    console.log(n, fib_num)
    return fib_num
}