function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }
  let res = 1;
  let currDiff = 0;
  let prevDiff = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    currDiff = nums[i + 1] - nums[i];
    if ((currDiff > 0 && prevDiff <= 0) || (currDiff < 0 && prevDiff >= 0)) {
      res++;
      prevDiff = currDiff;
    }
  }
  return res;
}
