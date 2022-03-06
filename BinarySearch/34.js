// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const helper = (nums, target, index) => {
    let l = (r = index);
    while (l > 0) {
        if (nums[l - 1] === target) {
            l -= 1;
        } else {
            break;
        }
    }
    while (r < nums.length - 1) {
        if (nums[r + 1] === target) {
            r += 1;
        } else {
            break;
        }
    }
    return [l, r];
};
var searchRange = function (nums, target) {
    let l = 0,
        r = nums.length;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return helper(nums, target, mid);
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return [-1, -1];
};
