function maxSlidingWindow(nums: number[], k: number): number[] {
  if (k === 1) {
    return nums;
  }
  const stack: number[] = [];
  for (let i = 0; i < k; i++) {
    while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
  }
  const result: number[] = [nums[stack[0]]];
  for (let i = k; i < nums.length; i++) {
    while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
    while (i - k + 1 > stack[0]) {
      stack.shift();
    }
    result.push(nums[stack[0]]);
  }
  return result;
}
