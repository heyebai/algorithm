// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// the biggest number will just show from very left or very right

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const result = [];
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        if (nums[l] * nums[l] > nums[r] * nums[r]) {
            result.unshift(nums[l] * nums[l]);
            l++;
        } else if (nums[l] * nums[l] < nums[r] * nums[r]) {
            result.unshift(nums[r] * nums[r]);
            r--;
        } else {
            if (l === r) {
                result.unshift(nums[l] * nums[l]);
            } else {
                result.unshift(nums[r] * nums[r]);
                result.unshift(nums[l] * nums[l]);
            }
            l++;
            r--;
        }
    }
    return result;
};
