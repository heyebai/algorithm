function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const leftSquare = Math.pow(nums[left], 2);
    const rightSquare = Math.pow(nums[right], 2);
    const number = leftSquare >= rightSquare ? leftSquare : rightSquare;
    result.unshift(number);
    if (number === rightSquare) {
      right--;
    } else {
      left++;
    }
  }
  return result;
}
