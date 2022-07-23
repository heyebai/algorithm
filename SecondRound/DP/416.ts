function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) return false;
  const target = sum / 2;
  sum = 0;
  const backTracking = (path: number[], start: number) => {
    if (sum === target) {
      return true;
    }
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      sum += nums[i];
      if (backTracking(path, i + 1)) return true;
      const temp = path.pop();
      sum -= temp;
    }
  };
  if (backTracking([], 0)) {
    return true;
  }
  return false;
}

function canPartition(nums: number[]): boolean {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) return false;
  const target = sum / 2;
  const dp: number[] = new Array(target + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[target] === target;
}
