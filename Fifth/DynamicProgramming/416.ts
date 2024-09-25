function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  if (sum % 2 === 1) return false;
  const bagSize = sum / 2;
  const bag = new Array(bagSize + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      bag[j] = Math.max(bag[j - nums[i]] + nums[i], bag[j]);
    }
  }

  return bag[bagSize] === bagSize;
}
