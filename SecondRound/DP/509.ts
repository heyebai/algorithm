function fib(n: number): number {
  if (n === 0) return 0;
  const arr = [1, 1];
  if (n <= 2) {
    return arr[n - 1];
  }
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr[arr.length - 1];
}
