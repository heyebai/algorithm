// 2 1,1
// 3 1,2
// 4 2,2
// 5 2,3
// 6 3,3
// 7 3,4
// 8 3,3,2
// 9 3,3,3
// 10 3,3,4
function integerBreak(n: number): number {
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 1;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      arr[i] = Math.max(arr[i], j * (i - j), j * arr[i - j]);
    }
  }
  return arr[n];
}
