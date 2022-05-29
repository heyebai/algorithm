function jump(nums: number[]): number {
  let path: number = 0,
    prevPath = 0;
  let res: number = 0;

  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length - 1; i++) {
    path = Math.max(i + nums[i], path);
    if (i === prevPath) {
      prevPath = path;
      res++;
    }
  }
  return res;
}
