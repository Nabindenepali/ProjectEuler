console.time('computation');

/***
 * Returns the sum of all the divisors of a number below it
 * @param n
 * @returns {number} - Sum of the divisors
 */
function getSumOfDivisors(n) {
    if (n < 0) { // Negative numbers are invalid
        return -1;
    }
    if (n === 1) { // 1 has no other divisor below 1
        return 0;
    }
    const sqrtN = Math.sqrt(n); // Check upto sqrt of the number will reveal all the divisors
    var sum = 1;
    for (var i = 2; i <= sqrtN; i++) {
        const quotient = n / i; // Get quotient on division by current number i.e. i
        if (Number.isInteger(quotient)) { // i is a divisor if the quotient is an integer
            sum += i;
            if (i !== quotient) { // If i and quotient are the same, do not add
                sum += quotient;
            }
        }
    }
    return sum;
}

/***
 * Computes and returns the sum of divisors for all the numbers below the given number
 * @param n
 */
function sumOfDivisorsBelow(n) {
    const sumOfDivisors = {};
    for (var i = 1; i < n; i++) { // Fill the object with the sum of divisors for all the numbers
        sumOfDivisors[i] = getSumOfDivisors(i);
    }
    return sumOfDivisors;
}

/***
 * Returns the list of amicable numbers below the given number based on the sum object given
 * @param sumOfDivisors - An object that holds the sum of divisors for the numbers
 * @param n
 * @returns {Array} - The array of amicable numbers
 */
function getAmicableNumbers(sumOfDivisors, n) {
    const amicableNumbers = [];
    for (var i = 1; i < n; i++) {
        const sum = sumOfDivisors[i]; // Get the sum from the object
        if (amicableNumbers.includes(i)) { // If the number is already found to be amicable with another number, no need to check
            continue;
        }
        // Push the two numbers to the list if sum of divisors are symmetric
        // sum(a) = b and sum(b) = a but a != b
        if (sumOfDivisors[sum] === i && sum !== i) {
            amicableNumbers.push(i, sum);
        }
    }
    return amicableNumbers;
}

/***
 * Returns the sum of all amicable numbers below the specified number
 * @param n
 * @returns {*} - Sum of amicable numbers below n
 */
function sumOfAmicableNumbersBelow(n) {
    const sumOfDivisors = sumOfDivisorsBelow(n);
    const amicableNumbers = getAmicableNumbers(sumOfDivisors, n);
    return amicableNumbers.reduce((a, b) => a + b, 0);
}

console.log(sumOfAmicableNumbersBelow(100000));

console.timeEnd('computation');
