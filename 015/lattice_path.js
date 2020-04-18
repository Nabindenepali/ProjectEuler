console.time('computation');

/***
 * Function to compute factorial of a number recursively
 * @param n - Number whose factorial is to be computed
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n-1)
}

/***
 * Function to compute combination
 * @param n - total positions
 * @param r - frequency of item
 * @returns {number}
 */
function combination(n, r) {
    return factorial(n)/(factorial(r)*factorial(n-r))
}

/***
 * To move from start to finish, we need to move right or bottom
 * To reach end, we always need n right turns and n left turns
 * Ways to make 2n turns with n right turns is what we need
 * We are trying to calculate possible number of strings like RDRD... by choosing n Rs
 * @param n - size of the lattice
 * @returns {number}
 */
function getPathCountForLattice(n) {
    return combination(2*n, n);
}

console.log(getPathCountForLattice(20));

console.timeEnd('computation');

