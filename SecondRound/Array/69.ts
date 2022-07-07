function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left <= right) {
    const midIndex = ~~((left + right) / 2);
    if (midIndex * midIndex === x) {
      return midIndex;
    } else {
      if (midIndex * midIndex > x) {
        right = midIndex - 1;
      } else {
        left = midIndex + 1;
      }
    }
  }
  return right;
}
