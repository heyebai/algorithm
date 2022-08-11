function search(nums: number[], target: number): number {
  let res: number = -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid: number = ~~((left + right) / 2);
    if (nums[mid] === target) {
      res = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
}
