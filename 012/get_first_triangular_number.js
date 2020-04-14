/***
 * Get nth triangular number with formula
 */
function getTriangularNumber(n) {
    return n*(n+1)/2;
}

/***
 * Count all divisiors by dividing upto square root of the number
 */
function getNumberOfDivisors(n) {
    if (n === 1) {
        return 1;
    }
    var count = 2; // As 1 and n are the two divisors for every number
    var sqrtN = Math.sqrt(n);
    if (sqrtN%1 === 0) { // Check if the sqrt is an integer
        count++
    }
    for (var i = 2; i < sqrtN; i++) {
        if (n % i === 0) {
            count += 2;
        }
    }
    return count;
}

/**
 * Get first triangular number with given number of factors
 */
function firstTriangularNumberWithFactors(n) {
    var i = 1;
    while (true) {
        var triangularNumber = getTriangularNumber(i);
        var divisorCount = getNumberOfDivisors(triangularNumber);
        if (divisorCount >= n) {
            return triangularNumber;
        }
        i++;
    }
}

console.time('computation');
console.log(firstTriangularNumberWithFactors(500));
console.timeEnd('computation');


