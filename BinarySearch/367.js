// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let l = 0,
        r = num;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
};
