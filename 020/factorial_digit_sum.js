const BigNumber = require('bignumber.js');

console.time('computation');

/***
 * Calculates the factorial for any given number
 * @param n - Given number
 * @returns {BigNumber} - Factorial of the given number
 */
function getFactorial(n) {
    if (n.isNegative()) { // Factorial can't be calculated if n is less than 0
        return new BigNumber(-1);
    }
    if (n.comparedTo(1) <= 0) { // Factorial is 1 if n = 0 or 1, ending condition of recursion as well
        return new BigNumber(1);
    }
    return n.multipliedBy(getFactorial(n.minus(1)));
}

/***
 * Calculates the sum of the digits for any given number
 * @param n - Given number
 * @returns {number} - Sum of the digits of the given number
 */
function sumOfDigits(n) {
    if (n.isNegative()) { // Change negative number into a positive number
        n = n.abs();
    }
    if (n.comparedTo(10) <= 0) { // Sum of digits is the number itself if it has single digit, ending condition of the recursion as well
        return n;
    }
    // Split a number into last digit and remaining digits
    return sumOfDigits(n.dividedToIntegerBy(10)).plus(n.modulo(10));
}

/***
 * Calculates the sum of the digits for the factorial of any given number
 * @param n - Given number
 * @returns {number} - Sum of the digits of the factorial of the given number
 */
function sumOfDigitsInFactorial(n) {
    const num = new BigNumber(n);
    return sumOfDigits(getFactorial(num));
}

console.log(sumOfDigitsInFactorial(1000).toString());

console.timeEnd('computation');
