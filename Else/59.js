// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
//  e.g.
//  ---->
// ^ 1 2 3 |
// | 8 9 4 |
// | 7 6 5
//  <----

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const arr = new Array(n);
    const loopTimes = ~~(n / 2);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    let num = 1;
    for (let i = 0; i < loopTimes; i++) {
        // left to right
        for (let j = 0 + i; j < n - 1 - i; j++) {
            arr[i][j] = num;
            num++;
        }
        // up to down
        for (let j = 0 + i; j < n - 1 - i; j++) {
            arr[j][n - 1 - i] = num;
            num++;
        }
        // right to left
        for (let j = 0 + i; j < n - 1 - i; j++) {
            arr[n - 1 - i][n - 1 - j] = num;
            num++;
        }
        // down to up
        for (let j = 0 + i; j < n - 1 - i; j++) {
            arr[n - 1 - j][i] = num;
            num++;
        }
    }
    if (n % 2 === 1) {
        arr[loopTimes][loopTimes] = num;
    }

    return arr;
};
