function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  let currDiff = 0,
    prevDiff = 0,
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    currDiff = nums[i] - nums[i - 1];
    if ((prevDiff >= 0 && currDiff < 0) || (prevDiff <= 0 && currDiff > 0)) {
      count++;
      prevDiff = currDiff;
    }
  }
  return count;
}
