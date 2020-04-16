console.time('computation');

/** Get the length of Collatz sequence, count until 1 is obtained
* @param n - starting number
* @returns {number} - length of sequence
*/
function lengthOfCollatzSequenceCount(n) {
    var count = 0;
    while (n !== 1) {
        if (n % 2) {
            n = 3*n + 1;
        } else {
            n = n/2;
        }
        count++;
    }
    return count;
}

// Get the maximum power of 2 below a million
var maxPowerOf2 = Math.floor(Math.log2(1000000));

// Start 1 above max power as perfect powers have shortest chain
var startingNumber = Math.pow(2, maxPowerOf2) + 1;

var limit = 1000000;
var longestChain = 0;
var numberWithLongestChain = 1;

// Check for all numbers from starting number to the limit
for (var i = startingNumber; i < limit; i++) {
    var chainLength = lengthOfCollatzSequenceCount(i);
    if (chainLength > longestChain) {
        longestChain = chainLength;
        numberWithLongestChain = i;
    }
}

console.log(numberWithLongestChain);

console.timeEnd('computation');
