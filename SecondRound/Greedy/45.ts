function jump(nums: number[]): number {
  if (nums.length < 2) return 0;
  let step = 0;
  let currLargestIndex = 0;
  let nextLargestIndex = 0;
  let currIndex = 0;
  while (currIndex < nums.length) {
    nextLargestIndex = Math.max(nextLargestIndex, currIndex + nums[currIndex]);
    if (currIndex === currLargestIndex) {
      currLargestIndex = nextLargestIndex;
      step++;
      if (currLargestIndex >= nums.length - 1) return step;
    }
    currIndex++;
  }
  return step;
}
