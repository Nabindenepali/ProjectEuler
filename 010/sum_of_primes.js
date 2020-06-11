console.time('computation');

// Intialize the store for sum of the primes
const sumOfPrimes = {
    1: 0,
    2: 2
};

// Initialize the array of primes
const primes = [2];

// Initialize is prime object to store whether numbers are prime or not
const isPrime = {
    1: false,
    2: true
};

/***
 * Returns the largest number for which sum of primes is available in sumOfPrimes store
 * @returns {string}
 */
function getLatestRecord() {
    const keys = Object.keys(sumOfPrimes);
    return keys[keys.length - 1];
}

/***
 * Marks all the multiples of current prime numbers between the range of start and end as non-prime
 * @param start - Start of sieve
 * @param end - End of sieve
 */
function sieveForPrimes(start, end) {
    for (const prime of primes) {
        if (prime === 2) {
            continue;
        }
        // Find the next multiple of the prime in the given range
        var factor = Math.ceil(start / prime);
        // To start from odd multiples only
        if (factor % 2 === 0) {
            factor ++;
        }
        // Sieve all the odd multiples of prime
        // No need to sieve the even multiples as we skip them
        for (var mult = factor*prime; mult <= end; mult += 2*prime) {
            isPrime[mult] = false;
        }
    }
}

/***
 * Calculates the sum of all the prime numbers below the given number
 * @param n - Limit below which primes need to be summed
 * @returns {number} - Sum of the primes below n
 */
function sumOfPrimesBelow(n) {
    var largestKey;
    // If the value is already available in our store, simply return it
    if (sumOfPrimes[n]) {
        return sumOfPrimes[n];
    } else {
        // Get the largest number for which the sum is available
        largestKey = getLatestRecord();
    }
    // Calculate the limit upto which the multiples need to be sieved
    const limit = Math.floor(Math.sqrt(n));
    // Initialize the sum as the largest value available in our store
    var sum = sumOfPrimes[largestKey];
    // Sieve all the multiples of available primes between the largest number
    // whose prime is available and our current n
    sieveForPrimes(largestKey, n);
    // Increment key by 1 f it's odd as we only consider the even values
    if (largestKey % 2 === 0) {
        largestKey++;
    }
    // Sieve the numbers upto the given number
    for (var i = largestKey; i <= n; i += 2) {
        if (isPrime[i] === false) { // No need to sieve for numbers that are not prime
            // If the number is not prime, the sum of the primes isn't updated
            // i+1 to store the sum for the next number as well, which is even
            sumOfPrimes[i] = sum;
            sumOfPrimes[i+1] = sum;
            continue;
        }
        primes.push(i);
        // If the number is prime, the sum of the prime needs to be updated
        // i+1 to store the sum for the next number as well, which is even
        sum += i;
        sumOfPrimes[i] = sum;
        sumOfPrimes[i+1] = sum;
        if (i > limit) {
            continue;
        }
        // Sieve all the odd multiples of i which is the prime number
        // No need to sieve the even multiples as we skip them
        for (var mult = 3*i; mult <= n; mult += 2*i) {
            isPrime[mult] = false;
        }
    }
    return sum;
}

const numbers = [2*Math.pow(10,6), Math.pow(10,6)];

for (const n of numbers) {
    console.log(sumOfPrimesBelow(n));
}

console.timeEnd('computation');
