// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const helper = (l, r, target, nums) => {
    console.log(l, r);
    if (l > r) {
        return -1;
    }
    const index = Math.floor((l + r) / 2);
    if (nums[index] === target) {
        return index;
    } else if (nums[index] > target) {
        return helper(l, index - 1, target, nums);
    } else {
        return helper(index + 1, r, target, nums);
    }
};
var search = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    } else if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        }
        return -1;
    }
    return helper(0, nums.length, target, nums);
};

var search = function (nums, target) {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};
