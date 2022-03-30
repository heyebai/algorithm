// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return [];
  }
  const sortedNums: number[] = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < sortedNums.length; j++) {
      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
        continue;
      }
      let l = j + 1,
        r = sortedNums.length - 1;
      while (l < r) {
        if (
          sortedNums[i] + sortedNums[j] + sortedNums[l] + sortedNums[r] <
          target
        ) {
          l++;
        }
        if (
          sortedNums[i] + sortedNums[j] + sortedNums[l] + sortedNums[r] >
          target
        ) {
          r--;
        }
        if (
          l < r &&
          sortedNums[i] + sortedNums[j] + sortedNums[l] + sortedNums[r] ===
            target
        ) {
          result.push([
            sortedNums[i],
            sortedNums[j],
            sortedNums[l],
            sortedNums[r],
          ]);
          while (l < r && sortedNums[l] === sortedNums[++l]);
          while (l < r && sortedNums[r] === sortedNums[--r]);
        }
      }
    }
  }
  return result;
}
