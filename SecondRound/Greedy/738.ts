function monotoneIncreasingDigits(n: number): number {
  const arr = n
    .toString()
    .split("")
    .map((a) => parseInt(a));
  let flag = arr.length;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      flag = i + 1;
      arr[i] -= 1;
    }
  }
  for (let i = flag; i < arr.length; i++) {
    arr[i] = 9;
  }
  return parseInt(arr.join(""));
}
