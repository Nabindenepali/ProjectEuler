console.time('computation');

/***
 * Calculate the sum of the digits in the number
 * @param num - Number whose digits need to be added
 * @returns {number}
 */
function sumOfDigits(num) {
    var sum = 0;
    var numString = num.toString();
    var i = numString.length;
    while (i--) {
        sum += parseInt(numString.charAt(i));
    }
    return sum;
}

/***
 * Calculate the sum of digits in the result of raising base to power
 * @param base - Number that is to be raised to the power
 * @param power - Power by which the given number is raised
 * @returns {number}
 */
function powerDigitSum(base, power) {
    return sumOfDigits(BigInt(Math.pow(base, power)));
}

console.log(powerDigitSum(2, 1000))

console.timeEnd('computation');
