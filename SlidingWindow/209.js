// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (nums.length < 1) {
        return 0;
    }
    let l = (r = 0);
    let result = 0,
        sum = 0;
    while (r < nums.length) {
        sum += nums[r];
        while (sum >= target) {
            if (result === 0) {
                result = r - l + 1;
            }
            result = Math.min(r - l + 1, result);
            sum -= nums[l];
            l++;
        }
        r++;
    }
    return result;
};
