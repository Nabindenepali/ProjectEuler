console.time('computation');

/***
 * Check if the the numbers form a Pythagorean triplet
 * @param a
 * @param b
 * @param c
 * @returns {boolean} - True if they form the triplet and false if they do not
 */
function isPythagoreanTriplet (a, b, c) {
    return a*a + b*b === c*c;
}

/***
 * Returns the maximum product of the three numbers that form the Pythagorean triplet
 * such that the sum of the three numbers is equal to the specified number
 * @param n - n of a + b + c = n
 * @returns {number} - The max product result
 */
function getPythagoreanTripletWithMaxProduct (n) {
    // Set the product to -1 first, returns this value if no triplet is possible
    var maxProduct = -1;
    // a < b < c should be obeyed so start with 1 and 2
    var a = 1;
    var b = 2;
    // Calculate this average so no need to move beyonnd this value for a
    // If a >= avg, at least one of b or c is <= a
    var avg = Math.floor(n/3);
    // Iterate while a is less than the average
    while (a < avg) {
        var c = n - (a + b);
        while (b <= c) {
            // Check if the numbers form a triplet
            // As we are iterating incrementally, newer finds always have the higher product
            if (isPythagoreanTriplet(a, b, c)) {
                maxProduct = a*b*c;
            }
            b++;
            c = n - (a + b);
        }
        a++;
        b = a + 1;
    }
    return maxProduct;
}

const n = 1000;

console.log(getPythagoreanTripletWithMaxProduct(n));

console.timeEnd('computation');
