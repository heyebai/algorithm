// Given 2 integers n and start. Your task is return any permutation p of (0,1,2.....,2^n -1) such that :

// p[0] = start
// p[i] and p[i+1] differ by only one bit in their binary representation.
// p[0] and p[2^n -1] must also differ by only one bit in their binary representation.

// this pattern is called binary gray code
// 回溯法对解空间做深度优先搜索时，有递归回溯和迭代回溯（非递归）两种方法，但一般情况下用递归方法实现回溯法。
// back tracking

// if we do not know binary gray code, we can use dfs to solve this promblem

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */

const dfs = (n, num, index, start, result, flag) => {
    if (index === 0) {
        for (let i = 0; i < n; i++) {
            const nNum = num ^ (1 << i);
            if (nNum === start) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < n; i++) {
        const nextNum = num ^ (1 << i);
        if (flag[nextNum] === 0 || flag[nextNum] === undefined) {
            result[index] = nextNum;
            flag[nextNum] = 1;
            if (dfs(n, nextNum, index - 1, start, result, flag)) {
                return true;
            }
            flag[nextNum] = 0;
        }
    }
    return false;
};
var circularPermutation = function (n, start) {
    const result = [];
    const flag = [];
    result[0] = start;
    flag[start] = 1;
    dfs(n, start, (1 << n) - 1, start, result, flag);
    return result;
};
