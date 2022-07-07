function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1; //, midIndex=-1
  while (left <= right) {
    const midIndex = ~~((left + right) / 2);
    if (nums[midIndex] === target) {
      let start = midIndex,
        end = midIndex;
      while (start >= 1) {
        if (target === nums[start - 1]) {
          start--;
        } else {
          break;
        }
      }
      while (end <= nums.length - 2) {
        if (target === nums[end + 1]) {
          end++;
        } else {
          break;
        }
      }
      return [start, end];
    } else {
      if (nums[midIndex] > target) {
        right = midIndex - 1;
      } else {
        left = midIndex + 1;
      }
    }
  }
  return [-1, -1];
}
