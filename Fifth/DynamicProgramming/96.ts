function numTrees(n: number): number {
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    // arr[i]=arr[i-1]
    for (let j = 0; j < i; j++) {
      arr[i] += arr[j] * arr[i - j - 1];
    }
  }
  return arr[n];
}
