const BigNumber = require('bignumber.js');

BigNumber.prototype.floor = function () {
    return this.integerValue(BigNumber.ROUND_FLOOR);
};


console.time('computation');

/***
 * Calculate the sum of the natural numbers up to the specified number
 * @param num - Number upto which the natural numbers have to be added
 * @returns {BigNumber} - Sum of the natural numbers
 */
function sumOfNaturalNumbers(num) {
    return num.times(num.plus(1).dividedBy(2));
}

/***
 * Calculate the sum of the multiples of a number below specified limit
 * @param num - Number whose multiples are to be summed
 * @param limit - A limit below which the multiples are to be summed
 */
function sumOfMultiples(num, limit) {
    var maxMultiplier = limit.minus(1).dividedBy(num).floor();
    return sumOfNaturalNumbers(maxMultiplier).times(num);
}

// Numbers like 15, 30, ... appear as the multiples of both 3 and 5
const below = new BigNumber(1000);
const sum = sumOfMultiples(3, below).plus(sumOfMultiples(5, below)).minus(sumOfMultiples(15, below));
console.log(sum.toString());

console.timeEnd('computation');
