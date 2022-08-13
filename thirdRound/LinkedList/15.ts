function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  let sum = 0;
  nums.sort((a, b) => a - b);
  const backTracking = (path: number[], start: number) => {
    if (path.length === 3 && sum === 0) {
      res.push(path.slice());
      return;
    }
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      sum += nums[i];
      backTracking(path, i + 1);
      const temp = path.pop();
      sum -= temp;
    }
  };
  const path: number[] = [];
  backTracking(path, 0);
  return res;
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}
