console.time('computation');

/***
 * Checks if any given number is a palindrome
 * @param num - Numer to be checked
 * @returns {boolean} - True/false based on whether the number is a palindrome
 */
function isPalindrome(num) {
    var numString = num.toString();
    var length = numString.length;
    // Comparison can be done only upto the half of the string as it covers all cases
    // The middle character can be ignored for odd length strings
    var halfLength = Math.floor(length / 2);
    for (var i = 0; i < halfLength; i++) {
        // The string is not palindrome if any character is not equal to its symmetric character from the end
        if (numString.charAt(i) !== numString.charAt(length - 1 - i)) {
            return false;
        }
    }
    return true;
}

/***
 * Gets largest palindrome product below specified limit
 * @param num - Upper limit
 * @param digits - Number of digits in the factors
 * @returns {number} - Largest palindrome product
 */
function getLargestPalindromeProductBelow(num, digits) {
    var largestPalindrome = -1;
    const smallestNumber = Math.pow(10, digits - 1); // Smallest number with specified digit count
    const largestNumber = Math.pow(10, digits) - 1; // Largest number with specified digit count
    // Start from smallest to the largest number
    // Iterate every inner loop until the product exceeds the specified number
    for (var i = smallestNumber; i <= largestNumber; i++) {
        for (var j = smallestNumber; j <= largestNumber; j++) {
            var product = i*j;
            // Break if the product of inner and outer iterators is equal to or exceeds the specified number
            if (product >= num) {
                break;
            }
            // Save all palindromes in an array
            if (isPalindrome(product)) {
                if (product > largestPalindrome) {
                    largestPalindrome = product;
                }
            }
        }
    }
    return largestPalindrome;
}

const below = 101110;

console.log(getLargestPalindromeProductBelow(below, 3));

console.timeEnd('computation');
