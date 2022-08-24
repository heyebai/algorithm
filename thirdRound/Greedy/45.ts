function jump(nums: number[]): number {
  let i = 0;
  let res = 0;
  while (i < nums.length - 1) {
    res++;
    let max = i + nums[i];
    if (max >= nums.length - 1) return res;
    let tempIndex = 0;
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (j + nums[j] > max) {
        max = j + nums[j];
        tempIndex = j;
      }
    }
    i = tempIndex;
  }
  return res;
}
