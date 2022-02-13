// Given a m x n matrix mat and an integer threshold, return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 */

// time failed
const getSum = (hIndex, vIndex, side, mat) => {
    let sum = 0;
    for (let i = 0; i < side; i++) {
        for (let j = 0; j < side; j++) {
            sum += mat[vIndex + i][hIndex + j];
        }
    }
    return sum;
};
const findMaxSide = (side, threshold, mat) => {
    let vIndex = 0;
    while (vIndex + side <= mat.length) {
        let hIndex = 0;
        while (hIndex + side <= mat[vIndex].length) {
            // get sum and compare
            const sqareSum = getSum(hIndex, vIndex, side, mat);
            console.log(sqareSum);
            if (sqareSum <= threshold) {
                return true;
            }
            hIndex += 1;
        }
        console.log("hyb");
        vIndex += 1;
    }
    return false;
};
var maxSideLength = function (mat, threshold) {
    if (mat.length === 0 || !mat[0].length) {
        return 0;
    }
    let maxSide = Math.min(mat.length, mat[0].length);
    for (let i = 0; i < maxSide; i++) {
        if (findMaxSide(maxSide - i, threshold, mat)) {
            return maxSide - i;
        }
    }
    return 0;
};
// time failed

var maxSideLength = function (mat, threshold) {
    const dp = new Array(mat.length + 1);
    for (let i = 0; i < mat.length + 1; i++) {
        dp[i] = Array(mat[0].length + 1).fill(0);
    }
    for (let i = 1; i <= mat.length; i++) {
        for (let j = 1; j <= mat[0].length; j++) {
            dp[i][j] =
                mat[i - 1][j - 1] +
                dp[i - 1][j] +
                dp[i][j - 1] -
                dp[i - 1][j - 1];
        }
    }
    let res = 0;
    for (let m = 1; m <= Math.min(mat.length, mat[0].length); m++) {
        for (let i = 1; i <= mat.length; i++) {
            for (let j = 1; j <= mat[0].length; j++) {
                if (i - m < 0 || j - m < 0) {
                    continue;
                }
                const s =
                    dp[i][j] - dp[i - m][j] - dp[i][j - m] + dp[i - m][j - m];
                if (s <= threshold) {
                    res = Math.max(m, res);
                }
            }
        }
    }
    return res;
};
