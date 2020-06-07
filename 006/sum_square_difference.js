console.time('computation');

/**
 * Returns sum of first n natural numbers
 * @param n - The natural number upto which sum needs to be computed
 * @returns {number} - Resulting sum
 */
function sum(n) {
    return n*(n+1)/2;
}

/**
 * Returns sum of the squares of first n natural numbers
 * @param n - The natural number upto which square of the sum needs to be computed
 * @returns {number} - Resulting sum
 */
function sumOfSquares(n) {
    return n*(n+1)*(2*n+1)/6;
}

/**
 * Returns the difference between sum of squares and square of the sum for first n natural numbers
 * @param n - The natural number upto which the difference needs to be computed
 */
function getDifference(n) {
    return Math.pow(sum(n), 2) - sumOfSquares(n);
}

const n = 100;

console.log(getDifference(n));

console.timeEnd('computation');
