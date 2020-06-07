console.time('computation');

/***
 * Returns isPrime object from 2 until specified number with all values as true
 * @param n - Limit upto which the object needs to be initiated
 */
function generateIsPrimeObject(n) {
    var isPrime = {};
    for (var i = 2; i <= n; i++) {
        isPrime[i] = true;
    }
    return isPrime;
}

/***
 * Calculates nth prime number
 * @param n
 * @returns {number} - Nth prime number
 */
function getNthPrime(n) {
    // Set a sufficiently large number as the limit
    // The limit suffices for given case as even when n is the largest, the nth prime won't exceed this limit
    var limit = 11*n;
    // Generate isPrime object with all values true upto this limit
    var isPrime = generateIsPrimeObject(limit);
    var count = 0;
    // Sieve the numbers upto the limit
    for (var i = 2; i <= limit; i++) {
        if (!isPrime[i]) { // No need to sieve for numbers that are not prime
            continue;
        }
        count++;
        if (count === n) { // Return the number when count is equal to the specified value for n
            return i;
        }
        for (var mult = 2*i; mult <= limit; mult += i) { // Sieve all the multiples of i which is the prime number
            isPrime[mult] = false;
        }
    }
}

const n = 10001;

console.log(getNthPrime(n));

console.timeEnd('computation');
