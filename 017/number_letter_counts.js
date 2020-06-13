console.time('computation');

// Maps for the distinct letters
// This map is enough to constuct the words for all numbers below 1000
var wordMap = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
    1000: 'Thousand',
    1000000: 'Million',
    1000000000: 'Billion',
    1000000000000: 'Trillion'
};

/***
 * Function to convert a number into word description
 * @param n - The number that needs to be converted into word
 * @returns {string} - Word description for the number
 */
function numberIntoWord(n) {
    if (n === 0) {
        return 'Zero';
    }
    var num = n; // Initialize to the given number
    var word = '';
    var baseOfTen = 0;
    while (num !== 0) {
        // Handle when the last two digits are between 11 and 19
        if (baseOfTen === 0) {
            const lastTwoDigits = num % 100;
            if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
                word = wordMap[lastTwoDigits] + word;
                baseOfTen += 2;
                num = Math.floor(num / 100); // Remove last 2 digits from the number
            }
        }
        // Handle for 1's place
        if (baseOfTen === 0) {
            const digit = num % 10;
            if (digit !== 0) {
                word = wordMap[digit] + word;
            }
            baseOfTen++;
            num = Math.floor(num / 10); // Remove last digit from the number
        }
        // Handle for 10's place
        if (baseOfTen === 1) {
            const digit = num % 10;
            if (digit !== 0) {
                if (word.length) {
                    word = ' ' + word;
                }
                word = wordMap[digit * 10] + word;
            }
            baseOfTen++;
            num = Math.floor(num / 10); // Remove last digit from the number
        }
        // Handle for 100's place
        if (baseOfTen === 2) {
            const digit = num % 10;
            if (digit !== 0) {
                if (word.length) {
                    word = ' ' + word;
                }
                word = wordMap[digit] + ' ' + wordMap[100] + word;
            }
            baseOfTen++;
            num = Math.floor(num / 10); // Remove last digit from the number
        }
        // Handle for places greater than 1000
        if (baseOfTen >= 3) {
            const base = Math.pow(10, baseOfTen); // Get current base
            const lastThreeDigits = num % 1000; // Compute last three digits and call the function recursively
            if (lastThreeDigits !== 0) {
                if (word.length) {
                    word = ' ' + word;
                }
                word = numberIntoWord(lastThreeDigits) + ' ' + wordMap[base] + word;
            }
            baseOfTen += 3;
            num = Math.floor(num / 1000); // Remove last 3 digits from the number
        }
    }
    return word;
}

/***
 * Returns the sum of the length of the words for the numbers upto the given number
 * @param n - Limit upto which the lengths are to be added
 * @returns {number} - Sum of all the lengths
 */
function sumOfLengthOfLettersInNumberUpto(n) {
    var sumOfLengths = 0;
    for (var i = 1; i <= n; i++) {
        sumOfLengths += numberIntoWord(i).length;
    }
    return sumOfLengths;
}

const upto = 1000;

console.log(sumOfLengthOfLettersInNumberUpto(upto));

console.timeEnd('computation');

