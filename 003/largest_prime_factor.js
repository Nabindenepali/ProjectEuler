console.time('computation');

/**
 * Checks if a number is prime or not
 * @param num - Number in consideration
 * @returns {boolean} - True for prime, false for non-prime
 */
function isPrimeNumber(num) {
    if (num <= 1) { // Numbers below or equal to 1 are all non-prime
        return false;
    }
    var sqrtNum = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) { // If a number is divisible by any number upto its sqrt, it's non-prime
            return false;
        }
    }
    return true;
}

/***
 * Calculates the largest prime factor for any given number
 * @param num - Number whose largest prime factor needs to be computed
 * @returns {null|number} - Null when no prime factor exists, else the largest prime factor
 */
function getLargestPrimeFactor(num) {
    var primeFactors = [];
    var limit = num;

    if (isPrimeNumber(limit)) { // If the given number itself is a prime number, it will be the largest factor
        return limit;
    }

    while (true) {
        for (var i = 2; i <= limit; i++) {
            if (limit % i === 0) {
                if (primeFactors.includes(i)) { // Only change the limit if the number was already found to be prime
                    limit = limit / i;
                    break;
                } else if (isPrimeNumber(i)) { // Push prime numbers
                    primeFactors.push(i);
                    limit = limit / i;
                    break;
                }
            }
        }
        if (isPrimeNumber(limit)) { // Break if the currentNumber itself is a prime number
            primeFactors.push(limit);
            break;
        }
        if (limit === 1) { // Break if limit is reduced to 1
            break;
        }
    }

    if (!primeFactors.length) {
        return null;
    }
    return Math.max(...primeFactors);
}

const num = 600851475143;
const factor = getLargestPrimeFactor(num);
console.log(factor);

console.timeEnd('computation');
