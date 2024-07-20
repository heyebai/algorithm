function maxSlidingWindow(nums: number[], k: number): number[] {
  const result = [];
  const queue = [];
  queue.push(nums[0]);
  for (let i = 1; i < k; i++) {
    while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i]);
  }
  result.push(queue[0]);
  let left = 0;
  for (let i = k; i < nums.length; i++) {
    // why it's the only case we shift
    if (queue.length > k || nums[left++] === queue[0]) {
      queue.shift();
    }
    while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i]);
    if (i >= k - 1) {
      result.push(queue[0]);
    }
  }
  return result;
}
