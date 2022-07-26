function nextGreaterElements(nums: number[]): number[] {
  const res: number[] = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j % nums.length >= 0) {
      if (j % nums.length === i) break;
      if (nums[j % nums.length] > nums[i]) {
        res[i] = nums[j % nums.length];
        break;
      }
      j++;
    }
  }
  return res;
}
