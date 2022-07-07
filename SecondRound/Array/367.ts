function isPerfectSquare(num: number): boolean {
  let left = 0,
    right = num;
  while (left <= right) {
    const mid = ~~((left + right) / 2);
    if (mid * mid === num) {
      return true;
    } else {
      if (mid * mid > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
}
