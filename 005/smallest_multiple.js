console.time('computation');

/***
 * Calculates the product of all the elements in an array
 * @param array - Array whose product needs to be calculated
 * @returns {num} - Product of the array elements
 */
function product(array) {
    return array.reduce((a, b) => a * b);
}

/***
 * Get smallest multiple perfectly divisible by all numbers upto specified number
 * @param n - Limit upto which calculation needs to be done
 * @returns {num} - Resulting multiple
 */
function getSmallestMultiple(n) {
    const factors = [1];
    // Loop upto the specified number
    for (var i = 2; i <= n; i++) {
        // Begin with the number
        var simplified = i;
        // Continuously divide by existing factors to get the number in simplest form
        for (factor of factors) {
            // No need to divide if the factor is 1
            if (factor === 1) {
                continue;
            }
            // Divide by a factor already present
            if (simplified % factor === 0) {
                simplified = simplified / factor;
            }
        }
        // Insert simplified number as a factor
        factors.push(simplified);
    }
    return product(factors);
}

const n = 20;

console.log(getSmallestMultiple(n));

console.timeEnd('computation');
