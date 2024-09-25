function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  if (sum < Math.abs(target)) return 0;
  // x+y=sum
  // x-y=target
  if ((sum + target) % 2 === 1) return 0;
  const bagSize = (sum + target) / 2;

  const bag = new Array(bagSize + 1).fill(0);
  bag[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = bagSize; j >= nums[i]; j--) {
      bag[j] += bag[j - nums[i]];
    }
  }
  return bag[bagSize];
}
