const BigNumber = require('bignumber.js');

BigNumber.prototype.floor = function () {
    return this.integerValue(BigNumber.ROUND_FLOOR);
};

console.time('computation');

/**
 * Returns the sum of even Fibonacci numbers upto the specified limit
 * @param limit - limit upto which even Fibonacci numbers are to be added
 * @returns {BigNumber} - Sum of even Fibonacci numbers upto specified limit
 */
function sumOfEvenFibonaccis(limit) {
    var sum = new BigNumber(0);

    var fib0 = new BigNumber(1);
    var fib1 = new BigNumber(1);
    var fib2 = fib1.plus(fib0);
    var currentIndex = 2;

    while (fib2.comparedTo(limit) === -1) { // As long as latest Fibonacci number is less than the limit
        if ((currentIndex + 1) % 3 === 0) { // Add only even Fibonacci numbers, which are fib2, fib5, fib8 and so on
            sum = sum.plus(fib2);
        }
        // Calculate new Fibonacci number
        fib0 = fib1;
        fib1 = fib2;
        fib2 = fib1.plus(fib0);
        currentIndex++;
    }

    return sum;
}

const below = new BigNumber(4*Math.pow(10, 6));
const sum = sumOfEvenFibonaccis(below);
console.log(sum.toString());

console.timeEnd('computation');
