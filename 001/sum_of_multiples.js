console.time('computation');

/***
 * Calculate the sum of the natural numbers up to the specified number
 * @param num - Number upto which the natural numbers have to be added
 * @returns {number} - Sum of the natural numbers
 */
function sumOfNaturalNumbers(num) {
    return num*(num+1)/2;
}

/***
 * Calculate the sum of the multiples of a number below specified limit
 * @param num - Number whose multiples are to be summed
 * @param limit - A limit below which the multiples are to be summed
 */
function sumOfMultiples(num, limit) {
    var maxMultiplier = Math.floor((limit-1)/num);
    console.log(maxMultiplier);
    return num*sumOfNaturalNumbers(maxMultiplier);
}

// Numbers like 15, 30, ... appear as the multiples of both 3 and 5
console.log(sumOfMultiples(3, 1000) + sumOfMultiples(5, 1000) - sumOfMultiples(15, 1000));

console.timeEnd('computation');
