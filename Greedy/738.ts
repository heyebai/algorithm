function monotoneIncreasingDigits(n: number): number {
  const res: string[] = n.toString().split("");
  let flag = res.length;
  for (let i = res.length - 1; i > 0; i--) {
    if (res[i - 1] > res[i]) {
      res[i - 1] = (parseInt(res[i - 1]) - 1).toString();
      flag = i;
    }
  }
  for (let i = flag; i < res.length; i++) {
    res[i] = "9";
  }
  return parseInt(res.join(""));
}
