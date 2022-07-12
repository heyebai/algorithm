function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
}
