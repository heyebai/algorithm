// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  const sortedNums: number[] = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    let r = nums.length - 1,
      l = i + 1;
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    while (l < r) {
      if (sortedNums[i] + sortedNums[l] + sortedNums[r] < 0) {
        l++;
      } else if (sortedNums[i] + sortedNums[l] + sortedNums[r] > 0) {
        r--;
      } else {
        result.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        while (nums[l] === nums[++l]);
        while (nums[r] === nums[--r]);
      }
    }
  }
  return result;
}
