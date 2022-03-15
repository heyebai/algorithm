// Given an m x n matrix, return all elements of the matrix in spiral order.
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const ans = [];
    const x = matrix.length,
        y = matrix[0].length;
    if (x < 2 || y < 2) {
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < y; j++) {
                ans.push(matrix[i][j]);
            }
        }
        return ans;
    }
    const loops = ~~(Math.min(x, y) / 2);
    for (let i = 0; i < loops; i++) {
        // left to right
        for (let j = 0 + i; j < y - 1 - i; j++) {
            ans.push(matrix[i][j]);
        }
        // up to down
        for (let j = 0 + i; j < x - 1 - i; j++) {
            ans.push(matrix[j][y - 1 - i]);
            console.log("te:", matrix[j + i][y - 1 - i]);
        }
        // right to left
        for (let j = 0 + i; j < y - 1 - i; j++) {
            ans.push(matrix[x - 1 - i][y - 1 - j]);
        }
        // down to up
        for (let j = 0 + i; j < x - 1 - i; j++) {
            ans.push(matrix[x - 1 - j][i]);
        }
    }

    if (x % 2 === 1 && x <= y) {
        for (let i = loops; i < y - loops; i++) {
            ans.push(matrix[loops][i]);
        }
    }
    if (y % 2 === 1 && y < x) {
        for (let i = loops; i < x - loops; i++) {
            ans.push(matrix[i][loops]);
        }
    }
    return ans;
};
