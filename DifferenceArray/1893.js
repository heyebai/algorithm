// You are given a 2D integer array ranges and two integers left and right. Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.

// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges. Return false otherwise.

// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    const diff = Array(right + 1).fill(0);
    for (let range of ranges) {
        if (range[0] <= right + 1) {
            diff[range[0]] += 1;
        }
        if (range[1] <= right) {
            diff[range[1] + 1] -= 1;
        }
    }
    const sum = [];
    sum.push(diff[0]);
    for (let i = 1; i < diff.length; i++) {
        sum[i] = sum[i - 1] + diff[i];
    }
    for (let i = left; i <= right; i++) {
        if (sum[i] < 1 || sum[i] === undefined) {
            return false;
        }
    }
    return true;
};

var isCovered = function (ranges, left, right) {
    const diff = Array(right + 1).fill(0);
    for (let range of ranges) {
        for (let i = range[0]; i <= range[1]; i++) {
            if (i < right + 1) {
                diff[i] += 1;
            }
        }
    }
    for (let i = left; i <= right; i++) {
        if (diff[i] < 1 || diff[i] === undefined) {
            return false;
        }
    }
    return true;
};
