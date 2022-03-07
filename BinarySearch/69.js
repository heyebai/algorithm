// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0,
        r = x;
    while (l <= r) {
        const num = Math.floor((l + r) / 2);
        if (num * num === x) {
            return num;
        } else if (num * num < x) {
            l = num + 1;
        } else {
            r = num - 1;
        }
    }
    return r;
};
