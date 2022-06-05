function climbStairs(n: number): number {
  if (n <= 1) {
    return n;
  }
  let curr = 2,
    last = 1,
    temp = 0;
  for (let i = 2; i < n; i++) {
    temp = curr;
    curr = curr + last;
    last = temp;
  }
  return curr;
}
